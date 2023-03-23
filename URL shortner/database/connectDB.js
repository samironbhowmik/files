const mongoose = require("mongoose")

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/urlShortner").then(()=>{
        console.log("Database is connected");
    })
}

module.exports = connectDB;