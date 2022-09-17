const express = require('express');
const router = express.Router();
const cityDetails = require('../controller/cityController.js');

router.post("/addCityDetails", cityDetails.addCity)
router.get("/getCityDetails", cityDetails.getCity)

module.exports = router;
