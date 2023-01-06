const TurmasController = require('../controllers/TurmasController.js')
const { Router } = require('express');

const route = Router();
route.get('/turmas', TurmasController.getTurmasList);
route.get('/turmas/:id', TurmasController.getTurmasById);
route.post('/turmas', TurmasController.createOrUpdateTurma);
route.post('/turmas/:id/restaurar', TurmasController.restoreTurma);
route.put('/turmas/:id', TurmasController.createOrUpdateTurma);
route.delete('/turmas/:id', TurmasController.deleteTurma);

module.exports = route;
