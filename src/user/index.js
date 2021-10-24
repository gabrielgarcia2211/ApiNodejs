const express = require("express");
//Trae la ruta de config global del proyecto
const { UserController } = require("./controller");
const router = express.Router();

module.exports.UserRES = (app) => {
  router
  .get("/", UserController.getUsers)
  .get('/create', UserController.ViewCreateUser)
  .get('/update/:id', UserController.ViewUpdateUser)
  .get("/:id", UserController.getUser)
  .post('/create', UserController.createUser)
  .post('/update', UserController.updateUser)
  .post("/:id", UserController.deleteUser);

  app.use("/res/user", router);
};
