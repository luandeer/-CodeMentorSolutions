// import express
const express = require('express');

const app = express();


app.get('/', (req, res) => {
   res.send('Primera solicitud');
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
   console.log(`Servidor web funcionando en https://localhost:${port}`);
})