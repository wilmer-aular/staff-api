const { Sequelize, DataTypes } = require("sequelize");

const staff = (sequelize, Sequelize) => {
  return sequelize.define(
    "staff",
    {
      name: DataTypes.STRING,
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
