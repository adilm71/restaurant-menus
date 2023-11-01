const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");

const Restaurant = sequelize.define("Restaurant", {
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  cuisine: DataTypes.STRING,
});
// TODO - create a Restaurant model

module.exports = { Restaurant };
