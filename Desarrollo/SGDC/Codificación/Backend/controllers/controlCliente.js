const connection = require('../database/connection');


const regitrarUsuario = (req, res) => {
   let {nombre, apellido, celular, direccion, contraseña } = req.body;

   const query = `INSERT INTO clients (nombre, apellido, celular, direccion, contraseña) VALUES ("${nombre}", "${apellido}", "${celular}", "${direccion}", "${contraseña}"  )`;

   connection.query(query, (err, results) => {
      if (err)
         throw err;

      console.log('Usuario registrado');
   });
   res.redirect('/');
}

module.exports = { regitrarUsuario };