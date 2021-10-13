'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        universityName: 'University of Washington',
        nameOfEvent: 'Halloween Party @ UW!',
        maxCapacity: 500,
        description: 'University of Washington is hosting a halloween party at the courtyard @ 9PM October 31st! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tincidunt dui ut ornare lectus. Risus sed vulputate odio ut. Ut diam quam nulla porttitor massa id. Aenean sed adipiscing diam donec adipiscing tristique. Diam quam nulla porttitor massa id neque aliquam vestibulum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.',
        price: 0,
        currentTicketCount: 0

      },
      {
        universityName: 'University of Oregon',
        nameOfEvent: 'Halloween Party @ UO!',
        maxCapacity: 500,
        description: 'University of Oregon is hosting a halloween party at the courtyard @ 9PM October 31st! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tincidunt dui ut ornare lectus. Risus sed vulputate odio ut. Ut diam quam nulla porttitor massa id. Aenean sed adipiscing diam donec adipiscing tristique. Diam quam nulla porttitor massa id neque aliquam vestibulum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'Halloween Party @ UC!',
        maxCapacity: 500,
        description: 'University of California is hosting a halloween party at the courtyard @ 9PM October 31st! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tincidunt dui ut ornare lectus. Risus sed vulputate odio ut. Ut diam quam nulla porttitor massa id. Aenean sed adipiscing diam donec adipiscing tristique. Diam quam nulla porttitor massa id neque aliquam vestibulum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.',
        price: 0,
        currentTicketCount: 0
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};
