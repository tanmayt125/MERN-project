const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    mobile:{
        type:String,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    favname:{
        type:String,
    }
})

const Information = new mongoose.model("Information",employeeSchema);

module.exports = Information;