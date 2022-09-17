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
listening on port
app.listen(5000, () => console.log("Listening on port 5000"));

app.get("/", function(req, res){
    res.send("Hello World")
})
*/
