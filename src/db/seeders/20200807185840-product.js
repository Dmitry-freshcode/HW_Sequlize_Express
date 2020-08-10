'use strict';

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function generateProduct(){
  const siteCategory =[];
  for (let i=1;i<50;i++){
    const priceOld = randomInteger(20,100);
    const randomSite = randomInteger(2,20);
    const randomCategory = randomInteger(3,15);
    siteCategory.push({
      name: `Product#${i}`,
      price_old: priceOld,
      price_new: priceOld*0.8,
      foto: `http:\\linkToFoto#${i}.jpg`,
      description: `some text ${i} some string ${i}`,
      categoryId: randomCategory,
      siteId: randomSite,
      end_date: '2020-12-12',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
  return siteCategory;
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product', generateProduct(),{});
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
