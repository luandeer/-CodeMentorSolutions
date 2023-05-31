const conexion = require('./database/database');

const registrarUsuario = (req, res) => {
   let { nombre, apellido, cel, dir, contra } = req.body;

   const query = `INSERT INTO clients (nombres, apellidos, celular, direccion, password) VALUES ("${nombre}", "${apellido}", "${cel}", "${dir}", "${contra}")`;

   console.log('Usuario registrado');
}

module.exports = { registrarUsuario };