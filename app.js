const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./connectDB/connectDB")
const route = require("./routes/signin_signup")
const note = require("./routes/notes")
const auth = require("./middleware/auth")
const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded())

app.use((req,res,next)=>{
    console.log("HTTP Method - "+req.method+ " , URL - " + req.url);
    next();
})

app.use("/",route)
app.use("/",note)
app.use("/upload", express.static("upload"))

app.listen(process.env.PORT, async()=>{
    await connectDB()
    console.log(`Server is up at port ${process.env.PORT}`);
})