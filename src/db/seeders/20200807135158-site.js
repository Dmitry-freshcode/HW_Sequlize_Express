'use strict';
function generateSite(){
  const domen = ["com", "ua", "ru", "zp.ua", "org", "by"];
  const sites =[];
  for (let i=1;i<100;i++){
    const random = Math.floor(Math.random() * domen.length);
    sites.push({
      name: `Sitename${i}`,
      link: `http:\\Sitename${i}.${domen[random]}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
  return sites;
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Site', generateSite(),{});
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
