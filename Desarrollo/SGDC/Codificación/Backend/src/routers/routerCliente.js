const express = require('express');
const routerCli = express.Router();
const controladorCli = require('../controllers/controladorCliente');

routerCli.post('/RegistrarUsuario.html', controladorCli.registrarUsuario);
routerCli.post('/IniciarSesion.html', controladorCli.iniciarSesion);

module.exports = routerCli;
