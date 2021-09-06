const crudService = require("../services/crud.service");

const crud = crudService("user");

const verifyUser = async (req, res, next) => {
  const { userName, email } = req.body;
  const allPromise = await Promise.all([
    crud.find("email", email),
    crud.find("userName", userName),
  ]);
  if (allPromise[0]) return res.json({ message: "email exits" });
  if (allPromise[1]) return res.json({ message: "userName exist" });
  return next();
};

module.exports = verifyUser;
