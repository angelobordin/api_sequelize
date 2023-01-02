const bodyParser = require('body-parser');
const PessoasRouter = require('./PessoasRouter.js');
const MatriculasRouter = require('./MatriculasRouter.js');
const TurmasRouter = require('./TurmasRouter.js');
const NiveisRouter = require('./NiveisRouter.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        PessoasRouter,
        MatriculasRouter,
        TurmasRouter,
        NiveisRouter
    );
};
