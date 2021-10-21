const express = require("express");
//Trae la ruta de config global del proyecto
const { ProductController } = require("./controller");
const router = express.Router();

module.exports.ProductsRES = (app) => {
  router.get("/", ProductController.getProducts);

  app.use("/res/products", router);
};
