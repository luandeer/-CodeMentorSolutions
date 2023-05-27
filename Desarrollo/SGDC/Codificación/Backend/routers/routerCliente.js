const express = require('express');
const controladorCliente = require('../controllers/controlCliente');

const routerCliente = express.Router();

router.get('/', controladorCliente.regitrarUsuario);

module.exports = routerCliente;