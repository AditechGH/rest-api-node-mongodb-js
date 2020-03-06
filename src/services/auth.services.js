import passport from "passport";
import LocalStrategy from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../modules/user/user.model"
import Courier from "../modules/courier/courier.model";
import Admin from "../modules/admin/admin.model";
import constants from "../config/constants";

// local Strategy

const localOpts = {
  usernameField: "email"
};

const localUserStrategy = new LocalStrategy(
  localOpts,
  async (email, password, done) => {
    try {
      const user = await User.findOne({
        email
      });
      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }
);

const localAdminStrategy = new LocalStrategy(
  localOpts,
  async (email, password, done) => {
    try {
      const user = await Admin.findOne({
        email
      });
      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }
);

const localCourierStrategy = new LocalStrategy(
  localOpts,
  async (email, password, done) => {
    try {
      const user = await Courier.findOne({
        email
      });
      if (!user) {
        return done(null, false);
      } else if (!user.authenticateUser(password)) {
        return done(null, false);
      }
      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }
);

// JWT strategy

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: constants.JWT_SECRET
};

const jwtStrategy = new JwtStrategy(jwtOpts, async (payload, done) => {
  try {
    let user = null;
    if(payload.type === 'user'){
      user = await User.findOne({ _id: payload._id });
    }
    if(payload.type === 'courier'){
      user = await Courier.findOne({ _id: payload._id });
    }
    if(payload.type === 'admin'){
      user = await Admin.findOne({ _id: payload._id });
    }
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use("user-local", localUserStrategy);
passport.use("admin-local", localAdminStrategy);
passport.use("courier-local", localCourierStrategy);
passport.use("jwt", jwtStrategy);

export const authUserLocal = passport.authenticate("user-local", { session: false });
export const authAdminLocal = passport.authenticate("admin-local", { session: false });
export const authCourierLocal = passport.authenticate("courier-local", { session: false });
export const authJwt = passport.authenticate("jwt", { session: false });
