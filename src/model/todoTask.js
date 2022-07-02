const {Schema, model} = require("mongoose");

const todoTaskSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
}, 
{timestamps:true})

const todoTaskModel = model("todoTask", todoTaskSchema)

module.exports = todoTaskModel
