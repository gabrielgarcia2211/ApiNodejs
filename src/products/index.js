const express = require("express");
//Trae la ruta de config global del proyecto
const { ProductController } = require("./controller");
const router = express.Router();

module.exports.ProductsRES = (app) => {
  router
  .get("/", ProductController.getProducts)
  .get('/create', ProductController.ViewCreateProduct)
  .get('/update/:id', ProductController.ViewUpdateProduct)
  .get("/:id", ProductController.getProduct)
  .post('/create', ProductController.createProduct)
  .post('/update', ProductController.updateProduct)
  .post("/:id", ProductController.deleteProduct);

  app.use("/res/products", router);
};
