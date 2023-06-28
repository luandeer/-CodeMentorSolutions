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
//Inicio de sesión
router.post('/login', (req, res) => {
   const { celular, password } = req.body;
 
   // Realizar la lógica de verificación de credenciales en la base de datos
   const sql = 'SELECT * FROM clients WHERE celular = ? AND contraseña = ?';
   const values = [celular, password];
 
   db.query(sql, values, (err, result) => {
     if (err) {
       throw err;
     }
   // Verificar si se encontró un usuario con las credenciales proporcionadas
     if (result.length > 0) {
       res.status(200).json({ message: 'Inicio de sesión exitoso' });
     } else {
       res.status(401).json({ message: 'Credenciales inválidas' });
     }
   });
 }); 
module.exports = { regitrarUsuario };