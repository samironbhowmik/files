const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    description:String,
    image:String
})

const noteModel = mongoose.model("noteModel", noteSchema)
module.exports = noteModel