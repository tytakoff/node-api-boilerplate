'use strict';

// Similar to:
// create table users (
//   id bigserial primary key,
//   name varchar(255),
//   "createdAt" timestamp with time zone not null,
//   "updatedAt" timestamp with time zone not null
// )
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users',
      'age',
      Sequelize.INTEGER
    );
  },
  down: function(queryInterface) {
    return queryInterface.removeColumn(
      'users',
      'age'
    );
  }
};
