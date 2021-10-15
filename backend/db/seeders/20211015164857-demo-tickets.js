'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      {
        userId: 1,
        eventId: 1
      },
      {
        userId: 2,
        eventId: 2
      },
      {
        userId: 3,
        eventId: 3
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      userId: { [Op.in]: [1, 2, 3] }
    }, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
  }
};
