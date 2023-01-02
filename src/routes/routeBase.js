const bodyParser = require('body-parser');
const PessoaRouter = require('./PessoasRouter.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(PessoaRouter);
}
