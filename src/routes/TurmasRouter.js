const TurmasService = require('../service/TurmasService.js')
const { Router } = require('express');

const route = Router();
route.get('/turmas', TurmasService.getTurmasList);
route.get('/turmas/:id', TurmasService.getTurmasById);
route.post('/turmas', TurmasService.createOrUpdateTurma);
route.put('/turmas/:id', TurmasService.createOrUpdateTurma);
route.delete('/turmas/:id', TurmasService.deleteTurma);

module.exports = route;
