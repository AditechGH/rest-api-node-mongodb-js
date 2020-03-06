import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import status from "http-status";
import service from "./admin.services";

export async function AddAdmin(req, res) {
  const save = async () => {
    const payload = req.body;
    payload._id = new mongoose.Types.ObjectId();
    payload.ip = service.getIP(req);
    payload.loginType = "admin";
    try {
      const data = await service.save(payload);
      return res.status(status.CREATED).json(data.toAuthJSON());
    } catch (e) {
      return res.status(status.BAD_REQUEST).json(e);
    }
  };

  save().then();
}

export async function fetch(req, res) {
  const page = req.params.page ? parseInt(req.params.page, 10) : 1;
  const limit = req.params.limit ? parseInt(req.params.limit, 10) : 10;

  try {
    const data = await service.fetch({}, page, limit);
    return res.status(status.OK).json(data);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function fetchOne(req, res) {
  try {
    const data = await service.fetchOne({ _id: req.params.id });
    return res.status(status.OK).json(data);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function login(req, res, next) {
  const update_ = async payload => {
    try {
      const data = await service.update({ _id: payload._id }, payload, {
        multi: false
      });
      if (data) {
        res.status(status.OK).json(req.user.toAuthJSON());
        return next();
      }
      res
        .status(status.BAD_REQUEST)
        .json({ message: "Unknown  error occurred!" });
      return next();
    } catch (e) {
      res.status(status.BAD_REQUEST).json(e);
      return next();
    }
  };
  const user = req.user;
  user.lastlogin = new Date();
  user.ip = service.getIP(req);
  user.loginType = "admin";
  user.loggedIn = true;
  update_(user).then();
}

export async function update(req, res) {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    type: req.body.type,
    avatar: req.body.avatar
  };

  try {
    const data = await service.update({ _id: req.params.id }, payload);
    return res.status(status.OK).json(data);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function editPassword(req, res) {
  if (
    req.body.pass1 === "" ||
    req.body.pass2 === "" ||
    req.body.password === ""
  ) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: "Please fill out all fields" });
  }
  if (req.body.pass1 !== req.body.pass2) {
    return res
      .status(status.BAD_REQUEST)
      .json({ message: "Passwords do not match" });
  }

  const generateHash = async () => {
    bcrypt.hash(req.body.pass1, null, null, (err, hash) => {
      updatePassword(hash).then();
    });
  };

  let updatePassword = async hash => {
    try {
      const data = await service.update(
        { _id: req.params.id },
        { password: hash },
        { multi: false }
      );
      return res.status(status.OK).json(data);
    } catch (e) {
      return res.status(status.BAD_REQUEST).json(e);
    }
  };

  try {
    const admin = await service.fetchOne({ _id: req.params.id });
    if (admin) {
      if (!bcrypt.compareSync(req.body.password, admin.password)) {
        return res
          .status(status.BAD_REQUEST)
          .json({ message: "Invalid old password" });
      }
      generateHash().then();
    } else {
      return res
        .status(status.BAD_REQUEST)
        .json({ message: "You're not eligible to change the password" });
    }
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}

export async function deleteAdmin(req, res) {
  try {
    const data = await service.delete({ _id: req.params.id });
    return res.status(status.OK).json(data);
  } catch (e) {
    return res.status(status.BAD_REQUEST).json(e);
  }
}
