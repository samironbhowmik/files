const mongoose = require("mongoose")

mongoose.set("strictQuery",false)
const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/mydata").then(()=>{
        console.log("Database is Connected!");
    })
}

module.exports = connectDB;