const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const errorResponse = require("../utils/error_response");
const { verifyToken } = require("../utils/auth");

function isLogedIn(req, res, next) {


          const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ msg: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
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