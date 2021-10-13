'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        categoryName: 'Online'
      },
      {
        categoryName: 'Free'
      },
      {
        categoryName: 'Music'
      },
      {
        categoryName: 'Dance'
      },
      {
        categoryName: 'Food & Drink'
      },
      {
        categoryName: 'Charity'
      },
      {
        categoryName: 'Outdoors'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Categories');
  }
};
