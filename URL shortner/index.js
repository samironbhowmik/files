const express = require("express")
const dotenv = require ("dotenv")

const route = require("./routes/route")
const connectDB = require("./database/connectDB")


const app = express()
dotenv.config()
app.use(express.json())

app.use("/", route)



app.listen(process.env.PORT, async(req,res)=>{
    await connectDB()
    console.log(`App is connected at port ${process.env.PORT}`);
})