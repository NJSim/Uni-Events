'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    universityName: DataTypes.STRING,
    nameOfEvent: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    currentTicketCount: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Ticket, {foreignKey: 'eventId', onDelete:'CASCADE', hooks:true });
  };
  return Event;
};
