const db = require("./database.service");
const raw = { raw: true };

const crudService = (nameModel) => {
  const model = db[nameModel];
  return {
    all: async () => await promiseHandler(model.findAll(raw)),
    byId: async (id) => {
      return await promiseHandler(mode.findOne({ ...raw, were: { id } }));
    },
    find: async (field, value) => {
      return await promiseHandler(model.findOne({ where: { [field]: value } }));
    },
    create: async (body) => {
      console.log({ body, model, nameModel });
      return await promiseHandler(model.create(body));
    },
    update: async (id, body) => {
      return await promiseHandler(model.update(body, { where: { id } }));
    },
    delete: async (id) => {
      return await promiseHandler(model.destroy({ where: { id } }));
    },
  };
};

const promiseHandler = async (promise) => {
  try {
    return await promise;
  } catch (err) {
    console.error(err);
  }
};
module.exports = crudService;
