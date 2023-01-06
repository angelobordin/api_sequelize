const MatriculasController = require('../controllers/MatriculasController');
const { Router } = require('express');

const route = Router();
route.get('/pessoas/:id/matricula', MatriculasController.getMatriculaByPersonId);
route.post('/pessoas/:id/matricula', MatriculasController.createOrUpdateMatriculaByPersonId);
route.post('/pessoas/:id/matricula/:matId', MatriculasController.restoreMatricula);
route.put('/pessoas/:id/matricula/:matId', MatriculasController.createOrUpdateMatriculaByPersonId);
route.delete('/pessoas/:id/matricula/:matId', MatriculasController.deleteMatricula);

module.exports = route;