const router = require("express").Router()
const {GenerateShortUrl} = require("../controller/controller")
const urlModel = require("../models/url")

router.post("/", GenerateShortUrl)

router.get("/:shortId", async(req,res)=>{
    try {
        const shortId = req.params.shortId
        console.log(shortId);
        const url = await urlModel.updateOne({shortId:shortId})
        // console.log(url);
        
        res.json({
            status:"success",
            url
        })

    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = router