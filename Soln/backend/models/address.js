const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
// const { id } = mongoose.Schema.Types;

const addressSchema = new mongoose.Schema({
    id : {
        type : Number,
        required: true,
        maxLength: 10
    },
    addressLine1 : {
        type : String, 
        maxLength : 100
    },
    addressLine2 : {
        type : String, 
        maxLength : 100
    },
    landMark : {
        type : String, 
        maxLength : 100
    },
    locality : {
        type : String,
        required : true,
        maxLength : 50
    },
    cityId : {
        // type : id,
        // type : mongoose.Schema.Types.ObjectId, 
        type : ObjectId, 
        ref : "city",
        required : true,
    }
});

//mongoose.model(<Collectionname>, <CollectionSchema>)
module.exports = mongoose.model("address", addressSchema);

/*
Creating model objects - 
const address = mongoose.model("addressDetails", AddressSchema);
const City = mongoose.model("Cities", CitySchema);

Exporting our model objects - 
module.exports = {
   address, City 
}
*/
