const MatriculasController = require('../controllers/MatriculasController');
const { Router } = require('express');

const route = Router();
route.get('/matriculas', MatriculasController.getMatriculasList);
route.get('/matriculas/:matId', MatriculasController.getMatriculasById);
route.get('/matriculas/pessoa/:id', MatriculasController.getMatriculasByStudantId);

route.post('/matriculas/pessoa/:id', MatriculasController.createOrUpdateMatriculaByPersonId);
route.post('/matriculas/:matId/pessoa/:id', MatriculasController.restoreMatricula);
route.put('/matriculas/:matId/pessoa/:id', MatriculasController.createOrUpdateMatriculaByPersonId);
route.delete('/matriculas/:matId/pessoa/:id', MatriculasController.deleteMatricula);

module.exports = route;