const mongoose = require("mongoose")

const { Schema } = mongoose;

const employeeSchema = new Schema({
    fullName: {
        type: String,
     
    },
    age: {
        type: Number,
     
    },
    address: {
        type: String,
     
    },
    place: {
        type: String,
     
    },
    city: {
        type: String,
     
    },
    state: {
        type: String,
     
    },
    country: {
        type: String,
     
    },
    zipcode: {
        type: Number,
     
    },
    phone: {
        type: Number
    }
})
module.exports = mongoose.model("employees",employeeSchema)