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
        // res.send(data);
        res.json({"message" : "Successfully added new city"});
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

/*
Whenever in the schema of one collection we provide a reference (in any field) to a document from any other collection, we need a populate() method to fill the field with that document.
.populate({path: cityId, select:['name', 'shortName']});
*/