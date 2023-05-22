const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

app.use(bodyParser.json());

app.post('/notification', (req, res) => {
      console.log('Request Headers:', req.headers);
      console.log('Request Body:', req.body);
      res.send('Registro recibido');
  });

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
  