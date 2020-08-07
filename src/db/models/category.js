'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {freezeTableName: true});
  Category.associate = function (models) {
  Category.hasMany(models.SiteCategory, {
    foreignKey: {field: 'categoryId'}
  });
};
    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            foreignKey: {
                field: 'id',
            },
        });
    };
  return Category;
};