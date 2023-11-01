const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

// TODO - create a Menu model
const { DataTypes } = require("sequelize");
const Menu = sequelize.define("Menu", {
  title: DataTypes.STRING,
});

module.exports = { Menu };
