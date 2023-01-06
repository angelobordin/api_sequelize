const PessoasController = require('../controllers/PessoasController.js')
const { Router } = require('express');

const route = Router();
route.get('/pessoas', PessoasController.getPeopleList);
route.get('/pessoas/:id', PessoasController.getPeopleById);
route.post('/pessoas', PessoasController.createOrUpdatePerson);
route.post('/pessoas/:id/restaurar', PessoasController.restorePerson);
route.post('/pessoas/:id/cancelar', PessoasController.cancelPerson);
route.put('/pessoas/:id', PessoasController.createOrUpdatePerson);
route.delete('/pessoas/:id', PessoasController.deletePerson);

module.exports = route;
