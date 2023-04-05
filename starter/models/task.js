const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'must provide task'],
        trim: true,
        maxlength: [20, 'make it short']
        },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", TaskSchema)