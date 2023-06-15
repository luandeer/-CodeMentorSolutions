const conexion = require('../database/database');

const registrarUsuario = (req, res) => {
   let { nombres, apellidos, celular, direccion, password } = req.body;

   const query = `INSERT INTO clientes (nombres, apellidos, celular, direccion, password) VALUES ("${nombres}", "${apellidos}", "${celular}", "${direccion}", "${password}")`;

   conexion.query(query, (err, result) => {
      if(err)
         throw err;

      // alert("Usuario registrado");
   });

   res.redirect('/');
}

module.exports = { registrarUsuario };