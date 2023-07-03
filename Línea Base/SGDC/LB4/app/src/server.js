const express = require('express');
const path = require('path');
const routerCli = require('./routers/routerCliente');

// configuracion
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

// rutas
app.use('/', routerCli);

const port = 3333;
app.listen(port, () => {
   try{
      console.log(`Servidor en http://localhost:${port}`);
   } catch(error){

   }
})