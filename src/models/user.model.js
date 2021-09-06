const { Sequelize, DataTypes } = require("sequelize");

const user = (sequelize, Sequelize) => {
  return sequelize.define(
    "user",
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

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

module.exports = user;
