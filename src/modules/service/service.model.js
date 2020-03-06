/**
 * Created by AditekGH on 2/26/2019.
 */

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

// USER SCHEMA
const Schema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  courier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier"
  },
  user_location: {
    longitude: {
      type: String,
      required: true,
      trim: true
    },
    latitude: {
      type: String,
      required: true,
      trim: true
    }
  },
  product_location: {
    longitude: {
      type: String,
      required: true,
      trim: true
    },
    latitude: {
      type: String,
      required: true,
      trim: true
    }
  },
  product: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: String,
    required: true,
    trim: true
  },
  open: {
    type: Boolean,
    default: false
  },
  status: {
    type: Boolean,
    default: true
  },
  confirmation: {
    vendor: {
      type: Boolean,
      default: false
    },
    courier: {
      type: Boolean,
      default: false
    },
    user: {
      type: Boolean,
      default: false
    }
  },
  rate: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

Schema.plugin(mongoosePaginate);

module.exports = mongoose.model("Service", Schema);
