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
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Categories', {
      categoryName: { [Op.in]: ['Online', 'Free', 'Music', 'Dance', 'Food & Drink', 'Charity', 'Outdoors'] }
    }, {});
  }
};
