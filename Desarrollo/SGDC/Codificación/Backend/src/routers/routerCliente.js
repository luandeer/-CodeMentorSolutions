const express = require('express');
const routerCli = express.Router();

routerCli.post('/registrar', () => {
   console.log('Función registrar');
});

module.exports = routerCli
