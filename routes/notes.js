const route = require("express").Router()
const multer = require("multer")
const noteModel = require("../model/note")

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
             cb(null,"upload")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("file")


route.post("/upload", upload, async(req,res)=>{
    try {
        const {title,description,image} = req.body
        // console.log(image);

        const user = await noteModel.create({
            title:title,
            description:description,
            image:req.file.path
        })

        res.json({
            status:"success",
            user
        })
        
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})


module.exports = route;