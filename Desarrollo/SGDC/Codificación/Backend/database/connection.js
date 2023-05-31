const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '123',
   database: 'database',
});
connection.connect( err => {
   if(err) throw err;

   console.log('Conexión completa');
})

module.exports = connection;