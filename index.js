const express = require('express');

const app = express();

require('./src/startup/db')();
require('./src/startup/routes')(app);

const port = 8000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server