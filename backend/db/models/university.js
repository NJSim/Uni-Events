'use strict';
module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define('University', {
    universityName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    aboutDescription: DataTypes.STRING
  }, {});
  University.associate = function(models) {
    // associations can be defined here
  };
  return University;
};