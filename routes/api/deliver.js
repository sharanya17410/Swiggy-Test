const express = require('express');
const router = express.Router();

//@route GET api/partners
//@desc Test Route
//@access Public
router.get('/', (req, res) => res.send('Deliver!!'));

module.exports = router;
