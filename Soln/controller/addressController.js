const Address = require("../models/address.js");

module.exports.addAddress= (req, res) => {
    const addressDetails = new Address({
        id : req.body.id,
        addressLine1 : req.body.addressLine1,
        addressLine2 : req.body.addressLine2,
        landMark : req.body.landMark,
        locality : req.body.locality,
        cityId : req.body.cityId
    });
    addressDetails
    .save(addressDetails)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.json(err)
    });
};

module.exports.getAddress= (req, res) => {
    Address.find()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.json(err);
    })
}