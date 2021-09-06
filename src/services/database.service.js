const config = require("../config");

const { Sequelize } = require("sequelize");

const { database, user, password, host, port, dialect, pool } = config.mysql;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect,
  operatorsAliases: true,
  pool,
});

const db = {};

db.staff = require("../models/staffs.model")(sequelize, Sequelize);
db.staffing = require("../models/staffing.model")(sequelize, Sequelize);
db.user = require("../models/user.model")(sequelize, Sequelize);

module.exports = db;
