const jwt = require("jsonwebtoken");
const { SECRECT_KEY } = require("../config/server_config");


function generateJwtToken(payload){
    const token  = jwt.sign(payload,  SECRECT_KEY, {expiresIn: '1h'})
    return token;
}

function verifyToken(token){
    try{
        return jwt.verify(token, SECRECT_KEY);
    }
    catch(error) {
        throw new Error("You are not authorized");
    }
}


module.exports = {
    generateJwtToken,
    verifyToken,
}