const PessoasService = require('../service/PessoasService.js')
const { Router } = require('express');

const route = Router();

route.get('/people', PessoasService.getPeople);
route.get('/people/:id', PessoasService.getPeopleById);
route.post('/people', PessoasService.createOrUpdatePerson);
route.put('/people/:id', PessoasService.createOrUpdatePerson);
route.delete('/people/:id', PessoasService.deletePerson);

module.exports = route
