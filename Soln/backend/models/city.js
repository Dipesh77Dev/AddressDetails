const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
    id : {
        type: Number,
        required: true,
        maxLength: 10
    },
    name : {
        type : String, 
        maxLength : 50,
        required: true,
    },
    shortName : {
        type : String, 
        maxLength : 50,
    },
    pinCode : {
        type : Number, 
        maxLength : 10,
    },
    district : {
        type : String, 
        maxLength : 50,
    }
});

module.exports = mongoose.model("city", citySchema);

/*
The ObjectId is the one of the data types of Mongoose, that tells the mongoose that this is referenced to another collection in MongoDb Database.
After importing, it is used along with ref.


*/

