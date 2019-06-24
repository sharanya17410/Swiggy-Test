const mongoose = require('mongoose');

const PickupSchema = new mongoose.Schema({
  available: {
    type: String
  },
  xP: {
    type: Number,
    required: true
  },
  yP: {
    type: Number,
    required: true
  },
  xD: {
    type: Number,
    required: true
  },
  yD: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model('pickup', PickupSchema);
