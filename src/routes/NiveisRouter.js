const NiveisService = require('../service/NiveisService.js');
const { Router } = require('express');

const route = Router();
route.get('/niveis', NiveisService.getNiveisList);
route.get('/niveis/:id', NiveisService.getNiveisById);
route.post('/niveis', NiveisService.createOrUpdateNivel);
route.put('/niveis/:id', NiveisService.createOrUpdateNivel);
route.delete('/niveis/:id', NiveisService.deleteNivel);

module.exports = route;
