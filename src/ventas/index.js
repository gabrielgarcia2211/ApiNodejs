const express = require("express");
//Trae la ruta de config global del proyecto
const { VentaController } = require("./controller");
const router = express.Router();

module.exports.SalesRES = (app) => {
  router
  .get("/", VentaController.getSales)
  .get('/create', VentaController.ViewCreateSale)
  .get('/update/:id', VentaController.ViewUpdateSale)
  .get("/:id", VentaController.getSale)
  .post('/create', VentaController.createSale)
  .post('/update', VentaController.updateSale)
  .post("/:id", VentaController.deleteSale);

  app.use("/res/sales", router);
};