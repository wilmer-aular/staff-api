const { Sequelize, DataTypes } = require("sequelize");

const staff = (sequelize, Sequelize) => {
  return sequelize.define(
    "staff",
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      type: DataTypes.STRING,
      notes: DataTypes.STRING,
      address: DataTypes.STRING,
      salary: DataTypes.NUMBER,
      createdDate: {
        type: "TIMESTAMP",
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};

module.exports = staff;
