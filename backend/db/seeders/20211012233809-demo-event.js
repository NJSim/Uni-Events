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
        universityName: 'University of Washington',
        nameOfEvent: 'Dance Time',
        maxCapacity: 500,
        description: 'Dance time test description here multiple words blah blah blah blah University of Idaho',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'Music Share',
        maxCapacity: 500,
        description: 'The Music Club is letting everyone take turns playing their music set, when you come in sign up at the front @ Bear Lounge',
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
        nameOfEvent: 'Trick or Drink: Pizza and Soda!',
        maxCapacity: 500,
        description: 'The University of California is hosting a party for students to dress up- dance, eat pizza, and drink all sorts of spooky sodas!',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Oregon',
        nameOfEvent: '10k RUN! Run till you drop',
        maxCapacity: 500,
        description: 'The UO is proud to present to you their annual 10k RUNATHON! Donations are welcome and all will be donated to our charity- run 4 kids.',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'AAPI Social meetup!',
        maxCapacity: 500,
        description: 'The UO AAPI association is having a meetup! Anyone is welcome to join - snacks and drinks are going to be provided Meet at Dean Room 302.',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Washington',
        nameOfEvent: 'Gaming Gamers Group',
        maxCapacity: 500,
        description: 'Come join us playing all sorts of games- video game set ups are going to be scattered- feel free to join in on anyones setup! Feel free to bring your setup too!',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Oregon',
        nameOfEvent: 'Hikers Unite!',
        maxCapacity: 500,
        description: 'The hiking association @ UO wants to invite you to join us in our hiking expedition.',
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
      {
        universityName: 'University of Washington',
        nameOfEvent: 'Math Club!',
        maxCapacity: 500,
        description: 'If you love doing Math and all types of Mathematical computations- join us - PRESENTED BY THE PHYSICS CLUB @ UW - Come join us at Bear Hall Room 20',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Oregon',
        nameOfEvent: 'We love to jump rope!',
        maxCapacity: 500,
        description: 'The exercise club of UO is having a 1 hour exercise jump rope focused work out at the Dennis Yard! Come join us!',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Washington',
        nameOfEvent: 'Water bottle Club Meetup',
        maxCapacity: 500,
        description: 'If you like water bottles- join us!',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'Dance Club - Everyones welcome!',
        maxCapacity: 500,
        description: 'Come join us at the dance club! We dance all nice long! All styles welcome!',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Oregon',
        nameOfEvent: 'We love to jump rope!',
        maxCapacity: 500,
        description: 'The exercise club of UO is having a 1 hour exercise jump rope focused work out at the Dennis Yard! Come join us!',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Washington',
        nameOfEvent: 'Free Course on how to be confident',
        maxCapacity: 500,
        description: 'World renowned psychologist John Walters will be joining us 7:00PM at Tilly Room 101 Join us- all seats first come first served',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'Dwayne The Rock Johnson Meetup',
        maxCapacity: 500,
        description: 'The Rock is filming on campus and we need all the extras we can get for the background movie shoot- Meet at Room 102 Satchel to sign the waiver',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of Washington',
        nameOfEvent: 'Jim Carey',
        maxCapacity: 500,
        description: 'Jim Carey is having a talk about love and movies come join us at the Dart Hall 7:00PM',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'Twilight vs Harry Potter',
        maxCapacity: 500,
        description: 'Having a fight between twilight lovers and harry potter lovers- join us!',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'Keyboards 101',
        maxCapacity: 500,
        description: 'John Hampton is having a presentation on how to build your own keyboards - 5:00PM Cheser Hall',
        price: 0,
        currentTicketCount: 0
      },
      {
        universityName: 'University of California',
        nameOfEvent: 'Is Sparkling Water good for you?',
        maxCapacity: 500,
        description: 'Dietician expert- Denise Haroldson is joining us and telling us whats really happening to our bodies when subject to sparkling water',
        price: 0,
        currentTicketCount: 0
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Events', {
      id: { [Op.in]: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] }
    }, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
  }
};
