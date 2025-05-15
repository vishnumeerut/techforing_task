const express = require("express");

const pingRouter = express.Router()

pingRouter.get("/", (req, res) => {
    return res.send({success:true, msg:"Ping check ok"})
})


module.exports = pingRouter;