'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Turmas', [{
      start: '2023-04-01',
      teacherId: 3,
      levelId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      start: '2023-05-01',
      teacherId: 4,
      levelId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      start: '2023-10-01',
      teacherId: 3,
      levelId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      start: '2026-10-01',
      teacherId: 4,
      levelId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Turmas', null, {});
  }
};
