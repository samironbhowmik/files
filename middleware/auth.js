const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    try {
        let token = req.headers.authorization;
        if(token)
        {
            token = token.split(" ")[1]
            let user = jwt.verify(token, process.env.MY_JWT)
            req.userId = user.id
        }
        else{
            res.json({message:"unauthorized user"})
        }

        next()
        
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
}

module.exports = auth;