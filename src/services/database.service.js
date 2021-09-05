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

db.employees = require("../models/employees.model")(sequelize, Sequelize);

module.exports = db;
