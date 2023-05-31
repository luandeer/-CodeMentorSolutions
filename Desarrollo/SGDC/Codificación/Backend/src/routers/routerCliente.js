const express = require('express');
const routerCli = express.Router();
const controladorCli = require('../controllers/controladorCliente');

routerCli.post('/registrar', controladorCli.registrarUsuario);

module.exports = routerCli;
