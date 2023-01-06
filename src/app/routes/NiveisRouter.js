const NiveisController = require('../controllers/NiveisController.js');
const { Router } = require('express');

const route = Router();
route.get('/niveis', NiveisController.getNiveisList);
route.get('/niveis/:id', NiveisController.getNiveisById);
route.post('/niveis', NiveisController.createOrUpdateNivel);
route.post('/niveis/:id/restaurar', NiveisController.restoreNivel)
route.put('/niveis/:id', NiveisController.createOrUpdateNivel);
route.delete('/niveis/:id', NiveisController.deleteNivel);

module.exports = route;
