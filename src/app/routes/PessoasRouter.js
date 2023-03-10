const PessoasController = require('../controllers/PessoasController.js')
const { Router } = require('express');

const route = Router();
route.get('/pessoas', PessoasController.getPeopleList);
route.get('/pessoas/:id', PessoasController.getPeopleById);
route.post('/pessoas', PessoasController.createOrUpdatePerson);
route.post('/pessoas/:id/restore', PessoasController.restorePerson);
route.post('/pessoas/:id/cancel', PessoasController.cancelPerson);
route.put('/pessoas/:id', PessoasController.createOrUpdatePerson);
route.delete('/pessoas/:id', PessoasController.deletePerson);

module.exports = route;
