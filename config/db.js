const mongoose = require("mongoose")
//connect to mongodb with these below url
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

// creating a function for connection of mongoDb  with server
function connectToMongo() {
    mongoose.connect(mongoURI, () => {
        console.log("MongoDB is successfully connected")
    })
}
module.exports = connectToMongo;