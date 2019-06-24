const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Pickup = require('../../models/Pickup');
//@route GET api/partners
//@desc Test Route
//@access Public
router.get('/', (req, res) => res.send('Pickup!!'));

router.post(
  '/',
  [
    check('xP', 'X coordinate is required')
      .not()
      .isEmpty(),

    check('yP', 'Y coordinate is required')
      .not()
      .isEmpty(),
    check('available', 'Availability is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { available, xP, yP, xD, yD } = req.body;
    try {
      // let pickup = await Partner.findOne({ available });

      pickup = new Pickup({
        available,
        xP,
        yP,
        xD,
        yD
      });
      await pickup.save();
      console.log(req.body);
      res.send('Pickup data saved');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
