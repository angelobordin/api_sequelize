const express = require('express');
const Routes = require('./routes/routeBase.js');

const app = express();
const port = 3000;

Routes(app);

app.listen(port, () => console.log(`Server is running at port ${port}`));

module.exports = app;
