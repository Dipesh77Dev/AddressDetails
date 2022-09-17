const express = require('express');
const router = express.Router();
const addressDetails = require('../controller/addressController.js');

router.post("/addAddressDetails", addressDetails.addAddress);
router.get("/getAddressDetails", addressDetails.getAddress);

module.exports = router;