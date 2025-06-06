const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { generateJwtToken } = require("../utils/auth");

async function createUser(req, res) {
  try {
    const userdetails = req.body;
    const hashpassword = bcrypt.hashSync(userdetails.password, 10);
    const data = await User.create({ ...userdetails, password: hashpassword });
    return res.status(StatusCodes.CREATED).send({ success: true, data: data });
  } catch (error) {
    return res.send({ msg: error.message });
  }
}
async function getUserByEmail(req, res) {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({msg:"Email and password are required"})
    }

    const user = await User.findOne({ email });
    console.log("Db user is:-", user);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        success: false,
        msg: "User not found",
      });
    }

    const doesPasswordMatch = bcrypt.compareSync(password, user.password);
    if (!doesPasswordMatch) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        success: false,
        msg: "Password is incorrect",
      });
    }

    //  Generate JWT token and set cookie
    const token = generateJwtToken({
      id: user._id,
      name: user.username,
      email: user.email,
    });

    console.log("token is:-", token)

    return res.status(StatusCodes.OK).json({
      success: true,
      data: token,
      msg:"Successfully Login",
    });
  } catch (error) {
    console.log("Catch block error:", error.message);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      msg: error.message,
    });
  }
}





module.exports = {
  createUser,
  getUserByEmail,
};
