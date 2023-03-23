const {nanoid} = require("nanoid")
const urlModel = require("../models/url")

async function GenerateShortUrl(req,res){
    const body = req.body
    if(!body.url){
        return res.status(400).json({
            message:"url is required"
        })
    }
    
    const shortID = nanoid(8)
    const url = await urlModel.create({
        shortId:shortID,
        redirectUrl: body.url,
    })

    res.json({
        status:"success",
        url
    })
}

module.exports = {
    GenerateShortUrl
};