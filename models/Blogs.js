const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model { }

Blogs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blogContent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: 'temp - MUST CHANGE'// fill in key here
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogs',
  },
)