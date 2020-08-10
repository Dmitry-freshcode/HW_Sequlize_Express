'use strict';
function generateCategory(){
  const categorys =[];
  for (let i=1;i<30;i++){
    categorys.push({
      name: `Category#${i}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
  return categorys;
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Category', generateCategory(),{});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
