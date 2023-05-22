const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades

app.post('/notification', (req, res) => {
    console.log(req.body); // Muestra el contenido del request en la consola
    res.send('Registro recibido'); // Envía una respuesta al cliente
  });

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
  