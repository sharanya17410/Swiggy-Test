const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Partner = require('../../models/Partner');
const Pickup = require('../../models/Pickup');
var dist = require('geo-distance-js');
var geoLib = require('geolib');

//@route GET api/partners?lng=##&lat=##
//@desc  Find the partner nearest to the pickup lat lng
//@access Public

router.get('/', async (req, res) => {
  try {
    //Get the pickup location of an order that hasn't been picked up yet from Mongo DB

    const pickups = await Pickup.find({ available: 'no' });

    //Query to find the partner nearest to the pickup point using Mongo DB's geoNear query param
    const partners_nearby = await Partner.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            //coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
            coordinates: [parseFloat(pickups[0].xP), parseFloat(pickups[0].yP)]
          },
          maxDistance: 100000,
          distanceField: 'location',
          spherical: true,
          limit: 1
        }
      }
    ]);

    //Calculating distance between pickup and drop off locations

    var distance = Math.sqrt(
      Math.pow(pickups[0].xD - pickups[0].xP, 2) +
        Math.pow(pickups[0].yD - pickups[0].yP, 2)
    );

    //Getting the information of the partner nearest to the pickup point

    var partner_info = await Partner.find({ _id: partners_nearby[0]._id });
    //console.log(partner_info[0]);

    //Adding few more elements to the response object

    var output = [];
    var element = {};
    element._id = partner_info[0]._id;
    element.name = partner_info[0].name;
    element.available = partner_info[0].available;
    element.email = partner_info[0].email;
    element.pickupDistance = partners_nearby[0].location;
    element.location = partner_info[0].location;
    element.pickupToDropDist = distance;
    element.pickUpxP = pickups[0].xP;
    element.pickUpyP = pickups[0].yP;
    element.pickUpxD = pickups[0].xD;
    element.pickUpyD = pickups[0].yD;
    element.totalDistance = distance + partners_nearby[0].location;
    output.push(element);

    console.log(output);

    res.send(output);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//@route POST api/partners
//@desc Post the details of a partner to the DB
//@access Public

router.post(
  '/',
  [
    //checking the required params
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('location', 'location coordinate is required')
      .not()
      .isEmpty(),
    check('email', 'Email is required').isEmail()
  ],
  async (req, res) => {
    //validating the input received at the api endpoint

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, available, location } = req.body;

    //checking if a delivery partner already exists with those details
    try {
      let partner = await Partner.findOne({ email });
      if (partner) {
        res.status(400).json({ errors: [{ msg: 'Partner already exists' }] });
      }

      partner = new Partner({
        name,
        email,
        available,
        location
      });

      //Storing the delivery partner details to the Database

      await partner.save();
      console.log(req.body);
      res.send('Partner saved');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
