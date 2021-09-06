const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const crudService = require("../services/crud.service");

const crud = crudService("user");

const authCtlr = {
  signUp: async (req, res) => {
    try {
      const user = req.body;
      user.password = await passwordEncript(user.password);
      const newUser = await crud.create(user);
      const token = await jwt.sign(
        { email: newUser.dataValues.email },
        config.secrectKey,
        {
          expiresIn: 3600, // hour
        }
      );
      return res.json({ token });
    } catch (err) {
      console.err(err);
      return res.json({ message: "error when registering user" });
    }
  },
  signIn: async (req, res) => {
    try {
      const user = req.body;
      const userDb = await crud.find("email", user.email);
      if (!userDb) return res.json({ message: "unvalid user" });

      const comparePwd = await comparePassword(userDb.password, user.password);
      if (!comparePwd) return res.json({ message: "Invalid password" });

      const token = await jwt.sign({ email: user.email }, config.secrectKey, {
        expiresIn: 3600, //hour
      });
      return res.json({ token });
    } catch (err) {
      console.err(err);
      return res.json({ message: "failed to login" });
    }
  },
};
const passwordEncript = async (password) => {
  const genSalt = await bcrypt.genSalt(5);
  return await bcrypt.hash(password, genSalt);
};
const comparePassword = async (passwordDb, passwordReceived) => {
  return await bcrypt.compare(passwordReceived, passwordDb);
};
module.exports = authCtlr;
