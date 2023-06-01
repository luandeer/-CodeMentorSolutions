const conexion = require('../database/database');

const registrarUsuario = (req, res) => {
   let { nombre, apellido, cel, dir, contra } = req.body;

   console.log("Luego del fetch");
   console.log(nombre);
   console.log(apellido);
   console.log(cel);
   console.log(dir);

   const query = `INSERT INTO clients (nombres, apellidos, celular, direccion, password) VALUES ("${nombre}", "${apellido}", "${cel}", "${dir}", "${contra}")`;

   console.log('Usuario registrado');
   res.send("xd")
}

module.exports = { registrarUsuario };