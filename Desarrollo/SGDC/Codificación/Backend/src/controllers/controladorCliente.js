const conexion = require('../database/database');

const registrarUsuario = (req, res) => {
  let { nombres, apellidos, celular, direccion, passwrd } = req.body;
  console.log(passwrd);
  const query = `INSERT INTO clientes (nombres, apellidos, celular, direccion, passwrd) VALUES ("${nombres}", "${apellidos}", "${celular}", "${direccion}", "${passwrd}")`;

  conexion.query(query, (err, result) => {
    if (err)
      throw err;

    // alert("Usuario registrado");
  });

  res.redirect('/');
}

const iniciarSesion = (req, res) => {
  const celular = req.body.celular;
  const passwrd = req.body.passwrd;

  const sql = 'SELECT * FROM clientes WHERE celular = ? AND passwrd = ?';
  const values = [celular, passwrd];

  conexion.query(sql, values, (err, result) => {
    if (err) {
      throw err;
    }

    if (result.length > 0) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  });
};

module.exports = {
  registrarUsuario,
  iniciarSesion,
};







