'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [{
      name: "Angelo Bordin",
      active: true,
      email: "angelo@bordin.com",
      role: "Estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Maria fernanda",
      active: true,
      email: "maria@fernanda.com",
      role: "Estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Julia Maria",
      active: true,
      email: "professora@julia.com",
      role: "Docente",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Augusto Pablo",
      active: true,
      email: "professor@augusto.com",
      role: "Docente",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Pedro Paulo",
      active: true,
      email: "pedro@paulo.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Maria Cecilia",
      active: false,
      email: "maria@cecilia.com",
      role: "estudante",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
