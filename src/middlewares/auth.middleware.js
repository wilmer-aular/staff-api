const jwt = require("jsonwebtoken");
const config = require("../config");
const crudService = require("../services/crud.service");

const crud = crudService("user");
const verifyAuth = async (req, res, next) => {
  try {
    const tkn = req.headers["x-access-token"];
    if (!tkn) return res.json({ message: "Unauthorized" });

    const verifyToken = await jwt.verify(tkn, config.secrectKey);
    const email = verifyToken.email;
    const user = await crud.find("email", email);
    if (!user) return res.json({ message: "user not exist" });
    return next();
  } catch (err) {
    console.error({ err });
    return res.json({ message: "Unautorized" });
  }
};

module.exports = verifyAuth;
