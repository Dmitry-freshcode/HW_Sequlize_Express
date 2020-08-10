'use strict';
module.exports = (sequelize, DataTypes) => {
  const SiteCategory = sequelize.define('SiteCategory',{
    siteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{freezeTableName: true});

  SiteCategory.associate = function (models) {
    SiteCategory.belongsTo(models.Category, {
      foreignKey: {
        field: 'categoryId'
      }
    });
  };

  SiteCategory.associate = function (models) {
    SiteCategory.belongsTo(models.Site, {
      foreignKey: {
        field: 'siteId'
      }
    });
  };


  return SiteCategory;
};