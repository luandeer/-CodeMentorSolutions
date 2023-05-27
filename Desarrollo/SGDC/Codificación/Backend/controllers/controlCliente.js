const connection = require('../database/connection');

const regitrarUsuario = (req, res) => {
   let { dni, nombre, correo } = req.body;

   const query = `INSERT INTO clients (dni, nombre, correo) VALUES ("${dni}", "${nombre}", "${correo}")`;

   connection.query(query, (err, results) => {
      if (err)
         throw err;

      console.log('Usuario registrado');
   });
   res.redirect('/');
}

module.exports = { regitrarUsuario };