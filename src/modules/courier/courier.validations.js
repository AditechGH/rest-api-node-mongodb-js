import Joi from "joi";

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
  register: {
    body: {
      fullName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(passwordReg).required(),
      phone: Joi.number().required(),
      countryCode: Joi.string().required(),
      address1: Joi.string().required(),
    }
  },
  update: {
    body: {
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string().email(),
      phone: Joi.string(),
      password: Joi.forbidden(),
      address1: Joi.string(),
    }
  },
  verify: {
    body:{
      code: Joi.string().required(),
    }
  },
  confirmEmail: {
    body:{
      token: Joi.string().required(),
      email: Joi.string().email().required(),
    }
  },
  forgotPassword: {
    body:{
      email: Joi.string().required(),
    }
  },
  resetPassword: {
    body:{
      token: Joi.string().required(),
      newPassword : Joi.string().regex(passwordReg).required(),
      verifyPassword : Joi.string().required(),
    }
  },
  changePassword: {
    body:{
      oldPassword : Joi.string().required(),
      newPassword : Joi.string().regex(passwordReg).required(),
    }
  }
};
