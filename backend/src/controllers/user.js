const { StatusCodes } = require("http-status-codes");
const UserService = require("../services/user");
const UserRepository = require("../repositories/user");
const bcrypt = require('bcrypt');

const USERSERVICE = new UserService(new UserRepository())

async function createUser (req, res) {
    try{
        const userdetails = req.body;
        console.log("userdetials", req.body)
        const hashpassword = bcrypt.hashSync(userdetails.password, 10);
        const data = await USERSERVICE.createUser({...userdetails, password:hashpassword})
        return res.status(StatusCodes.CREATED).send({success:true, data:data})
    }
    catch(error) {
        return res.error;
    }
}

module.exports = {
    createUser,
}