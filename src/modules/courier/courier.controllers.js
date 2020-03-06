import status from "http-status";
import crypto from "crypto";
import Courier from "./courier.model";
import sendEmail from "../../services/mail.services";
import * as emailTemplates from "../../services/templates";
import constants from "../../config/constants";

export async function createUser(req, res) {
  try {
    // eslint-disable-next-line no-shadow
    const confirmEmail = {
      token: crypto.randomBytes(20).toString("hex"),
      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)
    };

    const courier = await Courier.create({
      ...req.body,
      confirmEmail
    });

    const email = emailTemplates.courierWelcomeEmail({
      email: courier.email,
      token: courier.confirmEmail.token
    });

    await Promise.all([
      courier.sendAuthyToken(),
      sendEmail({
        from: `GooSendr <${constants.no_reply}>`,
        to: [req.body.email],
        subject: "Welcome to GooSendr",
        body: email
      })
    ]);

    return res.status(status.CREATED).json(courier.toAuthJSON());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function resendSmsToken(req, res) {
  try {
    const courier = await Courier.findById(req.params.id);

    if (!courier) {
      return res.sendStatus(status.UNAUTHORIZED);
    }
    await courier.sendAuthyToken();
    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function verifySmsToken(req, res) {
  try {
    const courier = await Courier.findById(req.params.id);

    if (!courier) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    await courier.verifyAuthyToken(req.body.code);

    courier.verified = true;
    await courier.save();

    return res.status(status.OK).json(courier.toAuthJSON());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function resendEmail(req, res) {
  try {
    const courier = await Courier.findById(req.params.id);

    if (!courier) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    const token = crypto.randomBytes(20).toString("hex");
    courier.confirmEmail = {
      token,
      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)
    };

    const email = emailTemplates.courierWelcomeEmail({
      email: courier.email,
      token
    });

    await Promise.all([
      courier.save(),
      sendEmail({
        from: `GooSendr <${constants.no_reply}>`,
        to: [courier.email],
        subject: "Welcome to GooSendr",
        body: email
      })
    ]);

    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function confirmEmail(req, res) {
  try {
    const courier = await Courier.findOne({
      "confirmEmail.token": req.body.token,
      "confirmEmail.expire": {
        $gt: Date.now()
      },
      email: req.body.email
    });
    if (!courier) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    if (courier.confirmed) {
      return res
        .status(status.BAD_REQUEST)
        .json({ messge: "this email has already been confirmed" });
    }

    courier.confirmed = true;
    courier.confirmEmail.token = undefined;
    courier.confirmEmail.expire = undefined;

    return res.status(status.OK).json(await courier.save());
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
    const courier = await Courier.findOne({ email: req.body.email });

    if (!courier) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    const token = crypto.randomBytes(20).toString("hex");
    const email = emailTemplates.forgotPassword({
      username: courier.fullName,
      token
    });

    courier.resetPassword = {
      token,
      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)
    };

    await Promise.all([
      courier.save(),
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
    const courier = await Courier.findOne({
      "resetPassword.token": req.body.token,
      "resetPassword.expire": {
        $gt: Date.now()
      }
    });

    if (!courier) {
      return res.sendStatus(status.UNAUTHORIZED);
    }

    if (req.body.newPassword !== req.body.verifyPassword) {
      return res
        .status(status.BAD_REQUEST)
        .json({ messge: "Passwords do not match" });
    }

    const email = emailTemplates.resetPassword({
      username: courier.fullName
    });

    courier.password = req.body.newPassword;
    courier.resetPassword.token = undefined;
    courier.resetPassword.expire = undefined;

    await Promise.all([
      courier.save(),
      sendEmail({
        from: `GooSendr <${constants.no_reply}>`,
        to: [courier.email],
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
    const courier = req.user;

    if (!courier.authenticateUser(req.body.oldPassword)) {
      return res
        .status(status.BAD_REQUEST)
        .json({ messge: "invalid old password" });
    }

    courier.password = req.body.newPassword;
    await courier.save();
    return res.sendStatus(status.OK);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function updateInfo(req, res) {
  try {
    const courier = req.user;

    Object.keys(req.body).forEach(key => {
      courier[key] = req.body[key];
    });

    return res.status(status.OK).json(await courier.save());
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}
