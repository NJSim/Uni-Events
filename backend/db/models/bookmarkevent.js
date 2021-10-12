'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookmarkEvent = sequelize.define('BookmarkEvent', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  BookmarkEvent.associate = function(models) {
    // associations can be defined here
  };
  return BookmarkEvent;
};