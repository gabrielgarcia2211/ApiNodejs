const axios = require("axios");
const fs = require("fs");
const { excelUtils } = require("./utils");

var dataProducts = null;

var products = (getProducts = async (req, res) => {
  try {
    //Metodo GET PRODUCTOS
    let resp = await axios.get(
      "https://apirest-nod.herokuapp.com/api/products"
    );
    let {
      data: { body },
    } = resp;
    dataProducts = body;
    res.render("producto/index", { body });
  } catch (error) {
    console.log(error);
  }
});

var idProduct = (getProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    //Metodo GET PRODUCTO
    const response = await axios.get(
      `https://apirest-nod.herokuapp.com/api/products/${id}`
    );

    let {
      data: { body },
    } = response;
    return body;
  } catch (error) {
    console.log(error);
  }
});

module.exports.ProductController = {
  getProduct: idProduct,

  getProducts: products,

  ViewReportProductAux: async (req, res) => {
    try {
      //Metodo GET PRODUCTOS
      await axios.get(
        "http://apirest-nod.herokuapp.com/api/products/report"
      );
      
    } catch (error) {
      console.log(error);
    }
  },

  ViewReportProduct: async (req, res) => {
    try {
      //Metodo GET PRODUCTOS
      await getProducts();
      excelUtils.excelGenerate(dataProducts, "data", res);
    } catch (error) {
      console.log(error);
    }
  },

  ViewCreateProduct: (req, res) => {
    try {
      res.render("producto/create");
    } catch (error) {
      console.log(error);
    }
  },

  createProduct: async (req, res) => {
    try {
      //Metodo GET PRODUCTOS
      let resp = await axios.post(
        "https://apirest-nod.herokuapp.com/api/products",
        {
          nombre: req.body.nombre,
          precio: req.body.precio,
          cantidad: req.body.cantidad,
        }
      );
      await getProducts(req, res);
    } catch (error) {
      console.log(error);
    }
  },

  ViewUpdateProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;

      let data = await getProduct(req, res);
      res.render("producto/edit", { data });
    } catch (error) {
      console.log(error);
    }
  },

  updateProduct: async (req, res) => {
    try {
      //Metodo GET PRODUCTO
      let resp = await axios.post(
        "https://apirest-nod.herokuapp.com/api/products/update",
        {
          _id: req.body.id,
          nombre: req.body.nombre,
          precio: req.body.precio,
          cantidad: req.body.cantidad,
        }
      );
      let {
        data: { message },
      } = resp;
      await getProducts(req, res);
    } catch (error) {
      console.log(error);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      var id = req.params.id;
      //Metodo GET PRODUCTO
      let resp = await axios.post(
        `https://apirest-nod.herokuapp.com/api/products/${id}`
      );
      let {
        data: { message },
      } = resp;
      console.log(message);
      await getProducts(req, res);
    } catch (error) {
      console.log(error);
    }
  },
};
