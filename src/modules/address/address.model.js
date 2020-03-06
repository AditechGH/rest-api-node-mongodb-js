import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "name is required!"],
      trim: true
    },
    address1: {
      type: String,
      required: [true, "Address is required!"],
      trim: true,
    },
    address2: {
      type: String,
      trim: true,
    },
    district: {
      type: String,
      required: [true, "district is required!"],
      trim: true,
    },
    region: {
      type: String,
      required: [true, "region is required!"],
      trim: true,
    },
    phone: {
      type: String,
      trim: true
    },
    countryCode: {
      type: String,
      trim: true
    },
    phone2: {
      type: String,
      trim: true
    },
    countryCode2: {
      type: String,
      trim: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

Schema.plugin(uniqueValidator, {
  message: "{VALUE} already taken!"
});

Schema.methods = {
  toJSON() {
    return {
      _id: this._id,
      fullName: this.fullName,
      address1: this.address1,
      address2: this.address2,
      district: this.district,
      region: this.region,
      phone: this.phone,
      countryCode: this.countryCode,
      phone2: this.phone2,
      countryCode2: this.countryCode2,
      createdAt: this.createdAt,
      user: this.user
    };
  },
};

Schema.statics = {
  createAddress(args, user) {
    return this.create({
      ...user.toUserJson(),
      ...args
    });
  },
};
Schema.plugin(mongoosePaginate);
export default mongoose.model("Address", Schema);
