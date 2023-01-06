const bodyParser = require('body-parser');
const PessoasRouter = require('./PessoasRouter.js');
const TurmasRouter = require('./TurmasRouter.js');
const NiveisRouter = require('./NiveisRouter.js');
const MatriculasRouter = require('./MatriculasRouter');

module.exports = app => {
    app.use(
        bodyParser.json(),
        PessoasRouter,
        TurmasRouter,
        NiveisRouter,
        MatriculasRouter
    );
};
