'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Turmas', [{
      start: '2023-04-01',
      teacherId: 8,
      levelId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      start: '2023-05-01',
      teacherId: 7,
      levelId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      start: '2023-10-01',
      teacherId: 6,
      levelId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Turmas', null, {});
  }
};
