const express = require('express');

const { ROUTES } = require('./router');
const { setupProxies } = require('./proxy');

const app = express();
const port = 3000;

setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`Listen on port http://localhost:${port}`)
});