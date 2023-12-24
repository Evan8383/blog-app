const { Sequelize, DataTypes, Model } = require('sequelize');

class Blogs extends Model {}

Blogs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  }
)