const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const errorResponse = require("../utils/error_response");
const { verifyToken } = require("../utils/auth");

function isLogedIn(req, res, next) {

        console.log("cookie is:->", req.cookies)
        if(!req.cookies || !req.cookies.token){
            console.log("inside if block")
            return res.status(StatusCodes.UNAUTHORIZED).send({success:false, msg:"You are not allowed!"})
        }
        const {token} =  req.cookies;
        let decodeToken;
        try{
            decodeToken = verifyToken(token);
        }
        catch(error){
            console.log("error middleare:-", error)
            return res.status(StatusCodes.UNAUTHORIZED).send({success:false, msg:"You are not allowed!"})

        }

        // modify my request object;
        // console.log("decodetoken is:", decodeToken)


        req.user = {email:decodeToken.email, id: decodeToken.id}
        console.log("new user is", req.user)


        next();
}

module.exports = {
    isLogedIn,
}