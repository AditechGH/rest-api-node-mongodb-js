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
  courier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier",
    required: true
  },
  licence: {},
  plate_number: {
    type: String,
    required: false,
    trim: true
  },
  available: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    required: false,
    trim: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

Schema.plugin(mongoosePaginate);

module.exports = mongoose.model("Transport", Schema);
