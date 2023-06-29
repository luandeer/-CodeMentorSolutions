const express = require('express');
const routerCli = express.Router();
const controladorCli = require('../controllers/controladorCliente');

routerCli.post('/', controladorCli.registrarUsuario);
routerCli.post('/login', controladorCli.iniciarSesion);

module.exports = routerCli;
