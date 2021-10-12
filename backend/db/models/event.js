'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    universityId: DataTypes.INTEGER,
    nameOfEvent: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    currentTicketCount: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};