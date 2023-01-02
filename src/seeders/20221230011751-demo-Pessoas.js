'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [{
      name: "Angelo Bordin",
      active: true,
      email: "angelo@teste",
      role: "Estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Maria fernanda",
      active: true,
      email: "teste@teste",
      role: "Estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Julia Maria",
      active: true,
      email: "teste@teste",
      role: "Docente",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Augusto",
      active: true,
      email: "teste@teste",
      role: "Docente",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Pedro Paulo",
      active: true,
      email: "teste@teste",
      role: "Docente",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
