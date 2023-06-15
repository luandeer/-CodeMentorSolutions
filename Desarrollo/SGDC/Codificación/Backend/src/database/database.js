const mysql = require('mysql2');

const conexion = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Santi2132',
   database: 'chickengo',
});

conexion.connect(error => {
   if (error)
      throw error;

   console.log('Conexion exitosa');
});

module.exports = conexion;
