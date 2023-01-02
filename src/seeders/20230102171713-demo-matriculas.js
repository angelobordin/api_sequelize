'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Matriculas', [{
        status: 'Confirmado',
        studantId: 4,
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        status: 'Confirmado',
        studantId: 3,
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        status: 'Confirmado',
        studantId: 2,
        classId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        status: 'Confirmado',
        studantId: 11,
        classId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Matriculas', null, {});
  }
};
