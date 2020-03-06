import status from "http-status";
import crypto from "crypto";
import User from "./user.model";
import sendEmail from "../../services/mail.services";
import * as emailTemplates from "../../services/templates";
import constants from "../../config/constants";

export async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    const email = emailTemplates.userWelcomeEmail();

    await Promise.all([
      user.sendAuthyToken(),
      sendEmail({
        from: `GooSendr <${constants.no_reply}>`,
        to: [req.body.email],
        subject: "Welcome to GooSendr",
        body: email
      })
    ]);

    return res.status(status.CREATED).json(user.toAuthJSON());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function resendSmsToken(req, res) {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    await user.sendAuthyToken();

    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function verifySmsToken(req, res) {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    await user.verifyAuthyToken(req.body.code);

    user.verified = true;
    await user.save();
    return res.status(status.OK).json(user.toAuthJSON());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function login(req, res, next) {
  await req.user._login.save();
  res.status(status.OK).json(req.user.toAuthJSON());
  return next();
}

export async function forgotPassword(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    const token = crypto.randomBytes(20).toString("hex");
    const email = emailTemplates.forgotPassword({
      username: user.fullName,
      token
    });
    user.resetPassword = {
      token,
      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)
    };

    await Promise.all([
      user.save(),
      sendEmail({
        from: `GooSendr <${constants.no_reply}>`,
        to: [req.body.email],
        subject: "GooSendr Password Reset",
        body: email
      })
    ]);

    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function resetPassword(req, res) {
  try {
    const user = await User.findOne({
      "resetPassword.token": req.body.token,
      "resetPassword.expire": {
        $gt: Date.now()
      }
    });

    if (!user) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    if (req.body.newPassword !== req.body.verifyPassword) {
      return res
        .status(status.BAD_REQUEST)
        .json({ messge: "Passwords do not match" });
    }

    const email = emailTemplates.resetPassword({
      username: user.fullName
    });

    user.password = req.body.newPassword;
    user.resetPassword = {
      token: undefined,
      expire: undefined
    };

    await Promise.all([
      user.save(),
      sendEmail({
        from: `GooSendr <${constants.no_reply}>`,
        to: [user.email],
        subject: "Your password has been changed",
        body: email
      })
    ]);

    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function changePassword(req, res) {
  try {
    const user = req.user;

    if (!user.authenticateUser(req.body.oldPassword)) {
      return res
        .status(status.BAD_REQUEST)
        .json({ messge: "invalid old password" });
    }

    user.password = req.body.newPassword;
    await user.save();
    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function updateUser(req, res) {
  try {
    const user = req.user;

    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key];
    });

    return res.status(status.OK).json(await user.save());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}
