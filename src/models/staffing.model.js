const { Sequelize, DataTypes } = require("sequelize");

const staffing = (sequelize, Sequelize) => {
  return sequelize.define(
    "staffing",
    {
      name: DataTypes.STRING,
      notes: DataTypes.STRING,
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

module.exports = staffing;
