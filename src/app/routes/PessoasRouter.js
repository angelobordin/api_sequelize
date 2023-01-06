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

route.get('/pessoas/:id/matricula', PessoasController.getMatriculaByPersonId);
route.post('/pessoas/:id/matricula', PessoasController.createOrUpdateMatriculaByPersonId);
route.post('/pessoas/:id/matricula/:matId', PessoasController.restoreMatricula);
route.put('/pessoas/:id/matricula/:matId', PessoasController.createOrUpdateMatriculaByPersonId);
route.delete('/pessoas/:id/matricula/:matId', PessoasController.deleteMatricula);

module.exports = route;
