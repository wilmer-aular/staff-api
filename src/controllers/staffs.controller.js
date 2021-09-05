const crudService = require("../services/crud.service");
const promiseHandler = require("../utils/promiseHandler.util");

const crud = crudService("staff");
const staffsCtrl = {
  all: (req, res) => {
    res.json("all staffs");
  },
  create: async (req, res) => {
    const promise = await crud.create(req.body);
    promiseHandler(promise, res, "/staffs/create");
  },
  byId: (req, res) => {
    res.json("byId staffs");
  },
  find: (req, res) => {
    res.json("find staffs");
  },
  delete: (req, res) => {
    res.json("delete staffs");
  },
  update: () => {
    res.json("update staffs");
  },
};
module.exports = staffsCtrl;
