'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SiteCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Site',
          key: 'id'
          },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Category',
          key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SiteCategories');
  }
};