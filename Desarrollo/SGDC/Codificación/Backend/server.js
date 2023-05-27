// import express
const express = require('express');
const routerCliente = require('./routers/routerCliente');

const app = express();

// middleware
app.use(express.json());

// routing
app.use('/', routerCliente);

const port = process.env.PORT || 8000;
app.listen(port, () => {
   console.log(`Servidor web funcionando en https://localhost:${port}`);
})