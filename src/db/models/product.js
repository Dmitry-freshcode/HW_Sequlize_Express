'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',{
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_old: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    price_new: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    foto: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "zaglushka",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,      
      validate: {
        isDate: true,
        isAfter: new Date(),
      }
    }
    // categoryId: DataTypes.INTEGER,
    // siteId: DataTypes.INTEGER,
    
  },{freezeTableName: true});

  Product.associate = function (models) {
    Product.hasMany(models.Category, {
      foreignKey: {
        field: 'categoryId',
      },
    });
  };
  Product.associate = function (models) {
    Product.hasMany(models.Site, {
      foreignKey: {
        field: 'siteId',
      },
    });
  };
  return Product;
};
 