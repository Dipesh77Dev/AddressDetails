// Express Setup
const express = require('express');
const app = express();
app.use(express.json());

// MongoDB connection using mongoose.
const mongoose = require("mongoose");
const dbURI = "mongodb+srv://Dipesh:admin@cluster0.agjew.mongodb.net/AddressDetail1?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('MongoDb connection has been successfully done');
    app.listen(5000, () => {
     console.log("Server has been started at port 5000");
 });
})
.catch(
    err => {
        console.log('MongoDb connection failed', err);
    }
);

// Basic Testing Route
app.get("/hello", (req, res) =>{
    res.send("Hello World")
});

// Routes with DB & controller
const cityRoutes = require("./routes/cityRoutes.js")
app.use("/api", cityRoutes)

const addressRoutes = require('./routes/addressRoutes.js');
app.use("/api", addressRoutes)

/*
Running json file - 
S1 - npm install -g json-server
S2 - Create a db.json file with some data.
S3 - json-server --watch db.json
*/


/*
// read/write in json file
const fs = require('fs');

app.get("/", (req, res) => {
    const details = require('./addressDetail.json');
    // console.log(details);
    res.send(details);
    // res.send(JSON.stringify(details));
});
*/

/*
// Writing json file - 

const a = require('./addressDetail'); // Reading JSON file

// Defining new data
let b = 
    [
        {
        "addressdetails": [
          {
            "id": 2,
            "addressLine1": "E-2, 1004, Neelkanth Residency",
            "addressLine2": "Kosad Cross Road",
            "landMark": "Near Madhuram LG Showroom",
            "locality": "Amroli",
            "cityId": 5
          }
        ]
    }
]

a.push(b); //Adding new data to address object

fs.writeFile("addressDetail.json", JSON.stringify(a), err =>{
    if (err) throw err;
    console.log("Done appending or adding Data");
});
*/

/* 
Using fs modules -
const fs = require('fs');
fs.readFile("addressDetail.json", function (err, data) {
    if (err) throw err;
    const address = JSON.parse(data);
    console.log(address);
});
*/

/*
listening on port
app.listen(5000, () => console.log("Listening on port 5000"));

app.get("/", function(req, res){
    res.send("Hello World")
})

Quite simply it passes the HTTP request and response objects into the function (usually an "app.get()" or "app.post()" ).
The req object contains a whole bunch of data about the request, such as parameters, queries, returned data from a form, cookies and more.
The res object is the response sent back to client, this might take the form of res.send, res.render, or res.redirect ...
*/

/*
cities & address Detail is defined as - in json file we had 2 objects i.e cities and address, so whatever properties are there in json file will
act as an address.
We can make various calls to it.
*/