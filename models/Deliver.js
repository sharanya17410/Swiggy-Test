const mongoose = require('mongoose');

const DeliverSchema = new mongoose.Schema({
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
  }
});

module.exports = User = mongoose.model('deliver', DeliverSchema);
