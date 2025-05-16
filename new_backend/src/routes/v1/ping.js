const express = require("express");
const { isLogedIn } = require("../../middlewares/auth_middleware");

const pingRouter = express.Router()

// function pingCheck(req, res) {
//     console.log("inside function")
//     return res.send({success:true, msg:"Ping check ok"})

// }

pingRouter.get("/", [isLogedIn],  (req, res) => {
    console.log("inside function")
    return res.json({success:true, msg:"Ping check ok"})

})


module.exports = pingRouter;