const express = require('express');
const path = require('path');

const conexion = require('./database/database');

// configuracion
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')))


const port = 3333;
app.listen(port, () => {
   console.log(`Servidor en http://localhost:${port}`);
})