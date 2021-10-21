//Importacion de paquetes
const path = require('path');
const express = require("express");
const app = express();

//Trae la ruta de config global del proyecto
const { ProductsRES } = require("./src/products/index");

//Modulos
ProductsRES(app);

/*De esta forma le damos la capacidad a nuestro aplicativo de recibir datos JSON
Cuerpo de la peticion*/
app.use(express.json());

// Indica el directorio donde se encuentran los archivos de las vistas ('views')
app.set("views", "./src/views");

// Indica el motor de plantilla que se utiliza, en este ejemplo se utiliza 'pug'
app.set('view engine', 'pug');

/*app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});*/

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

//    "dev": "set DEBUG=app:* & nodemon index.js",
