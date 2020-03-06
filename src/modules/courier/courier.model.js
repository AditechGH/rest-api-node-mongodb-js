/**
 * Created by AditekGH on 3/16/2019.
 */

import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcrypt-nodejs";
import jsonwebtoken from "jsonwebtoken";
import publicIp from "public-ip";
import twilio from 'twilio';
import constants from "../../config/constants";

const authy = require("authy")(constants.twilio.authyKey);

const twilioClient = twilio(
  constants.twilio.accountSid,
  constants.twilio.authToken
);

// USER SCHEMA
const Schema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required!"],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true,
    minlength: [4, "Password need to be longer!"]
  },
  phone: {
    type: String,
    unique: true,
    required: [true, "Phone Number is required!"],
    trim: true
  },
  countryCode: {
    type: String,
    required: [true, "countryCode is required!"],
    trim: true
  },
  authyId: String,
  verified: {
    type: Boolean,
    default: false
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  ip: String,
  resetPassword:{
    token: String,
    expire: Date,
  },
  confirmEmail:{
    token: String,
    expire: Date,
  },
  signup: {
    type: Date,
    default: Date.now
  },
  lastlogin: {
    type: Date,
    default: Date.now
  },
  address1: {
    type: String,
    required: true,
    trim: true
  },
  address2: {
    type: String,
    required: false,
    trim: true
  },
  deviceToken: {
    type: String,
    required: false,
    trim: true
  },
  avatar: {},
});
Schema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
  }
  if(!this.ip) {
    this.ip = await this.getIP();
  }
  return next();
});

Schema.plugin(uniqueValidator, {
  message: "{VALUE} already taken!"
});

Schema.methods = {
  _hashPassword(password) {
    return bcrypt.hashSync(password);
  },
  authenticateUser(password) {
    return bcrypt.compareSync(password, this.password);
  },
  createToken() {
    return jsonwebtoken.sign(
      {
        _id: this._id,
        type: 'courier'
      },
      constants.JWT_SECRET
    );
  },
  toAuthJSON() {
    return {
      _id: this._id,
      username: this.username,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      countryCode: this.countryCode,
      address1: this.address1,
      address2: this.address2,
      avatar: this.avatar,
      token: `bearer ${this.createToken()}`
    };
  },
  toJSON() {
    return {
      _id: this._id,
      username: this.username,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      countryCode: this.countryCode,
      address1: this.address1,
      address2: this.address2,
      avatar: this.avatar
    };
  },
  toUserJson() {
    return {
      fullName: this.fullName,
      phone: this.phone,
      countryCode: this.countryCode,
    }
  },
  _login : {
    async save () {
      this.ip = await this.getIP();
      this.lastlogin = new Date();
      return await this.save();
    }
  },
  getIP() {
    return publicIp.v4();
  },
  verifyAuthyToken(otp) {
    return new Promise((resolve, reject) => {
      authy.verify(this.authyId, otp, (err, data) => {
        if(err){
            reject(err)
        }
        if(data){
          resolve(data);
        }
      });
    });
  },
  sendAuthyToken() {
    return new Promise((resolve, reject) => {
      if (!this.authyId) {
        authy.register_user(
          this.email,
          this.phone,
          this.countryCode
        , async (err, user) => {
            if(err){
              reject(err)
            }
            this.authyId = user.user.id;
            await this.save();
            sendToken(this.authyId);
        });
      } else {
        sendToken(this.authyId);
      }

      function sendToken (authyId) {
        authy.request_sms(authyId, true, (err, data) => {
          if(err){
            reject(err)
          }
          if(data){
            resolve(data)
          }
        });
      };
    });
  },
  async sendMessage(message) {
    return await twilioClient.sendMessage(
      {
        to: `+${this.countryCode}${this.phone}`,
        from: constants.twillio.number,
        body: message
      }
    );
  }
};
Schema.plugin(mongoosePaginate);

module.exports = mongoose.model("Courier", Schema);
