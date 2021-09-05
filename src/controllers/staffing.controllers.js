const crudService = require("../services/crud.service");
const promiseHandler = require("../utils/promiseHandler.util");

const crud = crudService("staffing");

const staffingCtrl = {
  all: (req, res) => {
    res.json("all staffing");
  },
  create: async (req, res) => {
    const promise = await crud.create(req.body);
    promiseHandler(promise, res, "/staffing/create");
  },
  byId: (req, res) => {
    res.json("byId staffing");
  },
  find: (req, res) => {
    res.json("find staffing");
  },
  delete: (req, res) => {
    res.json("delete staffing");
  },
  update: () => {
    res.json("update staffing");
  },
};
module.exports = staffingCtrl;
