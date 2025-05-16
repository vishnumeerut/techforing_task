const dotenv = require("dotenv");

dotenv.config();



module.exports = {
    PORT:process.env.PORT || 3030,
    SECRECT_KEY:process.env.SECRECT_KEY, 
    NODE_ENVIRONMENT:process.env.NODE_ENVIRONMENT, 
}