const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
})

const Register = new mongoose.model("Register",employeeSchema);

module.exports = Register;
