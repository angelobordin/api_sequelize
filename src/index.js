const express = require('express');
const Routes = require('./routes/routeBase.js');

const app = express();
const port = 3000;

Routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;
