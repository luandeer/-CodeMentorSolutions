const express = require('express');
const controladorCli = require('../controllers/controladorCliente');
const routerCli = express.Router();

routerCli.post('/RegistrarUsuario.html', controladorCli.registrarUsuario);
routerCli.post('/IniciarSesion.html', controladorCli.iniciarSesion);

module.exports = routerCli;
