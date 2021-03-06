//Importacion de paquetes
const express = require("express");
const bodyParser = require('body-parser')


//Trae la ruta de config global del proyecto


const { ProductsRES } = require("./src/products/index");
const { UserRES } = require("./src/user/index");
const { SaleRES } = require("./src/sales/index");



const app = express();

// parse various different custom JSON types as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Indica el directorio donde se encuentran los archivos de las vistas ('views')
app.set("views", "./src/views");

// Indica el motor de plantilla que se utiliza, en este ejemplo se utiliza 'pug'
app.set('view engine', 'pug');

app.get("/", (req,res) => {
        
  res.render("index");

});



//Modulos
ProductsRES(app);
UserRES(app);
SaleRES(app);





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

//    "dev": "set DEBUG=app:* & nodemon index.js",
