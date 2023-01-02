const NiveisService = require('../service/NiveisService.js')
const { Router } = require('express');

const route = Router();
route.get('/niveis', NiveisService.getTurmasList);
route.get('/niveis/:id', NiveisService.getTurmasById);
route.post('/niveis', NiveisService.createOrUpdateTurma);
route.put('/niveis/:id', NiveisService.createOrUpdateTurma);
route.delete('/niveis/:id', NiveisService.deleteTurma);

module.exports = route;
