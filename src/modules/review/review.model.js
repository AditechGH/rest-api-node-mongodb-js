/**
 * Created by AditekGH on 2/26/2019.
 */

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// USER SCHEMA
const Schema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Courier',
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required!'],
  },
  comment: {
    type: String,
    required: false,
    trim: true,
  },
  timeposted: {
    type: Date,
    default: Date.now,
  },
});

Schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Review', Schema);
