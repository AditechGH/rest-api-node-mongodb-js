import Joi from "joi";

export default {
  createAddress: {
    body: {
      fullName: Joi.string(),
      address1: Joi.string().required(),
      district: Joi.string().required(),
      region: Joi.string().required(),
      phone: Joi.number(),
      countryCode: Joi.string()
    }
  },
  updateAddress: {
    body: {
      fullName: Joi.string(),
      address1: Joi.string(),
      district: Joi.string(),
      region: Joi.string(),
      phone: Joi.number(),
      countryCode: Joi.string()
    }
  }
};
