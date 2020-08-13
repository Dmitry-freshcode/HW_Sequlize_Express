'use strict';
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function generateSiteCategory(){
  const siteCategory =[];
  for (let i=1;i<30;i++){
    const randomSite = randomInteger(2,20);
    const randomCategory = randomInteger(3,25);
    siteCategory.push({
      siteId: randomSite,
      categoryId: randomCategory,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
  return siteCategory;
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SiteCategory', generateSiteCategory(),{});
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
