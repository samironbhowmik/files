const route = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user");
const auth = require("../middleware/auth")
//signup
route.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.json({
        message: "user already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email: email,
      password: hashedPassword,
    });

    const token = await jwt.sign(
      { id: hashedPassword._id },
      process.env.MY_JWT
    );
    res.json({
      status: "success",
      user,
      token,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

//signin
route.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.json({
        message: "user not found",
      });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password)
    if(!matchPassword)
    {
        return res.json({
            message:"invalid credentials"
        })
    }

    const token = await jwt.sign({email:existingUser.email , id:existingUser._id}, process.env.MY_JWT)

    res.json({
        status:"success",
        // user:existingUser,
        existingUser,
        token
    })

  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});


//match jwt
// route.post("/api/test",(req,res)=>{
//     console.log("req.userId");
// })

route.post("/test", auth, (req,res)=>{
    console.log(req.userId);
})
module.exports = route;
