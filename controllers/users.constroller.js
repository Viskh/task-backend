const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },

  registerUser: async (req, res) => {
    try {
      const { email, password, name, img } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({
        email,
        password: hash,
        name,
        img,
      });

      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const condidate = await User.findOne({ email });

/*       if (!condidate) {
        return res.status(401).json("неверный логин или пароль");
      } */

      const valid = await bcrypt.compare(password, condidate.password);
/*       if (!valid) {
        return res.status(401).json("неверный логин или пароль");
      } */

      const payload = {
        id: condidate._id,
      };

      const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "21d",
      });

      res.json({
        token: token,
        id: condidate._id,
      });
    } catch (error) {
      res.status(401).json(error.toString());
    }
  },
};
