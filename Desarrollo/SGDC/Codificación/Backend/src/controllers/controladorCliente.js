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
//Inicio de sesión
router.post('/login', (req, res) => {
   const { celular, password } = req.body;
 
   // Realizar la lógica de verificación de credenciales en la base de datos
   const sql = 'SELECT * FROM clientes WHERE celular = ? AND password = ?';
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
module.exports = router;
module.exports = { registrarUsuario };