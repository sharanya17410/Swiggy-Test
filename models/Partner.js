const mongoose = require('mongoose');

// "geometry":{
//   "type" : "Point",
//   "coordinates":[125.6,10.1]
// }
// create geolocation Schema
const GeolocationSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});
const PartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  available: {
    type: String
  },
  phoneno: {
    type: Number,
    required: false
  },
  location: GeolocationSchema
});

module.exports = User = mongoose.model('partner', PartnerSchema);
