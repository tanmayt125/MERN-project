const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
})

const Message = new mongoose.model("Message",employeeSchema);

module.exports = Message;
