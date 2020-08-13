'use strict';

module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define(
    'Site',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { freezeTableName: true }
  );
  // Site.associate = function (models) {
  //     Site.hasMany(models.SiteCategory, {
  //         foreignKey: {
  //             field: 'siteId'
  //         }
  //     });
  // };
  Site.associate = function (models) {
    Site.hasMany(models.Product, {
      foreignKey: {
        field: 'Id',
      },
      as: 'products',
    });
  };
  return Site;
};
