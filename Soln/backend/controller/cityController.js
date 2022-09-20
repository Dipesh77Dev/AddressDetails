const City = require("../models/city.js");

module.exports.addCity = (req, res) => {
    const cityDetails = new City({
        id : req.body.id,
        name : req.body.name,
        shortName : req.body.shortName,
        pinCode : req.body.pinCode,
        district : req.body.district
    });
    cityDetails
    .save(cityDetails)
    .then((data) => {
        // res.send(data);
        res.json({"message" : "Successfully added new city"});
    })
    .catch((err) => {
        res.json(err)
    });
};

module.exports.getCity = (req, res) => {
    City.find()
    .then((data) => {
        res.send(data);
        // res.json(data);
        // res.send({"cities" : City});
    })
    .catch((err) => {
        res.json(err);
    })
}

module.exports.getByIdCity = (req, res) => {
    City.findById(req.params._id)
    .then((data) =>{
            res.send(data);
        })
    .catch(
        (err) => {
            res.status(500).send(err);
        }
    )
}