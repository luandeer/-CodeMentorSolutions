const express = require('express');
const routerCli = express.Router();
const controladorCli = require('../controllers/controladorCliente');

routerCli.post('/Registro.html/registrar', controladorCli.registrarUsuario);
routerCli.post('/', controladorCli.iniciarSesion);

module.exports = routerCli;
