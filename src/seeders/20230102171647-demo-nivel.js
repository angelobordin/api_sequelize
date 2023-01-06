'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Niveis', [{
      name: 'Iniciante',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Intermediário',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Avançado',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Especialista',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Niveis', null, {});
  }
};
