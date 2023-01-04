const PessoasService = require('../service/PessoasService.js')
const { Router } = require('express');

const route = Router();
route.get('/pessoas', PessoasService.getPeople);
route.get('/pessoas/:id', PessoasService.getPeopleById);
route.post('/pessoas', PessoasService.createOrUpdatePerson);
route.post('/pessoas/:id/restaurar', PessoasService.restorePerson);
route.put('/pessoas/:id', PessoasService.createOrUpdatePerson);
route.delete('/pessoas/:id', PessoasService.deletePerson);

route.get('/pessoas/:id/matricula', PessoasService.getMatriculaByPersonId);
route.post('/pessoas/:id/matricula', PessoasService.createOrUpdateMatriculaByPersonId);
route.post('/pessoas/:id/matricula/:matId', PessoasService.restoreMatricula);
route.put('/pessoas/:id/matricula/:matId', PessoasService.createOrUpdateMatriculaByPersonId);
route.delete('/pessoas/:id/matricula/:matId', PessoasService.deleteMatricula);

module.exports = route;