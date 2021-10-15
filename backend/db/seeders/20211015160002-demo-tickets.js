'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      {
        userId: 7,
        eventId: 1
      },
      {
        userId: 8,
        eventId: 2
      },
      {
        userId: 9,
        eventId: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Tickets', {
      userId: { [Op.in]: ['1', '2', '3'] }
    }, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
  }
};
