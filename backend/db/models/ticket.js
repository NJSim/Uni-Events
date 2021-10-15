'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.User, { foreignKey: 'userId'})
    Ticket.belongsTo(models.Event, { foreignKey: 'eventId'})
  };
  return Ticket;
};
