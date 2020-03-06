/**
 * Created by AditekGH on 2/26/2019.
 */
import mongoose from "mongoose";
import validator from "validator";
import mongoosePaginate from "mongoose-paginate";
import bcrypt from "bcrypt-nodejs";
import jsonwebtoken from "jsonwebtoken";
import constants from '../../config/constants';
import Post from "../post/post.model";

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required!"],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: "{VALUE} is not a valid email!"
    }
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true
  },
  favorites: {
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  type: {
    type: String,
    required: [true, "Admin Type is required!"],
    trim: true
  },
  ip: {
    type: String,
    required: true,
    trim: true
  },
  signup: {
    type: Date,
    default: Date.now
  },
  lastlogin: {
    type: Date,
    default: Date.now
  },
  notescheck: {
    type: Date,
    default: Date.now
  },
  loggedIn: {
    type: Boolean,
    default: false
  },
  avatar: {},
  token: {
    type: String,
    required: false,
    trim: true
  },
  loginType: {
    type: String,
    default: "admin"
  },
  expire: {
    type: String,
    required: false,
    trim: true
  }
});
Schema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
  }
  return next();
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
        type: 'admin',
      },
      constants.JWT_SECRET
    );
  },
  toAuthJSON() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      type: this.type,
      avatar: this.avatar,
      token: `bearer ${this.createToken()}`
    };
  },
  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      avatar: this.avatar
    };
  },
  _favorites: {
    async posts(postId) {
      if (this.favorites.posts.indexOf(postId) >= 0) {
        this.favorites.posts.remove(postId);
        await Post.decFavoriteCount(postId);
      } else {
        this.favorites.posts.push(postId);
        await Post.incFavoriteCount(postId);
      }
      return this.save();
    },
    isPostIsFavorite(postId) {
      if (this.favorites.posts.indexOf(postId) >= 0) {
        return true;
      }
      return false;
    }
  }
};
Schema.plugin(mongoosePaginate);

export default mongoose.model("Admin", Schema);
