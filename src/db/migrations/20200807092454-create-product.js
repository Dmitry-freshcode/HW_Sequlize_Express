'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price_old: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      price_new: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      foto: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "zaglushka",
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Category',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      siteId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Site',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull:false,
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
    await queryInterface.dropTable('Products');
  }
};