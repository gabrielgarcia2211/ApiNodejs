const axios = require("axios");
const { UserController } = require("../user/controller");



var products = getProducts = async (req, res) => {
  try {
    //Metodo GET PRODUCTOS
    let resp = await axios.get(
      "https://apirest-nod.herokuapp.com/api/products"
    );
    let {
      data: { body },
    } = resp;
    return body;
  } catch (error) {
    console.log(error);
  }
};

var users = getUsers = async (req, res) => {
  try {
    //Metodo GET User
    let resp = await axios.get(
      "https://apirest-nod.herokuapp.com/api/user"
    );
    let {
      data: { body },
    } = resp;
    return body;
  } catch (error) {
    console.log(error);
  }
};


var sends = getSales = async (req, res) => {
  try {
    //Metodo GET VENTA
    let resp = await axios.get(
      "https://apirest-nod.herokuapp.com/api/sales"
    );
    let {
      data: { body },
    } = resp;
    //console.log(body);
    res.render("sales/index", { body });
  } catch (error) {
    console.log(error);
  }
};


var idSale = getSale = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    //Metodo GET VENTA
    const response = await axios.get(
      `https://apirest-nod.herokuapp.com/api/sales/${id}`
    );

    let {
      data: { body },
    } = response;
    return body;
  } catch (error) {
    console.log(error);
  }
};

module.exports.VentaController = {
  getProducts:products,

  getUsers:users,

  getSale:idSale,

  getSales:sends,
  
  ViewCreateSale: async (req, res) => {
    try {
      let users =    await getUsers(req,res);
      let products =    await getProducts(req,res);
      res.render("sales/create", {users, products});
    } catch (error) {
      console.log(error);
    }
  },

  createSale: async (req, res) => {
    try {
      //Metodo GET POST
      let resp = await axios.post(
        "https://apirest-nod.herokuapp.com/api/sales",
        {
          "idFrom": req.body.idU,
          "idProducto": req.body.idP,
          "message": req.body.message,
        }
      );
      await getSales(req,res);
     
    } catch (error) {
      console.log(error);
    }
  },

  ViewUpdateSale: async (req, res) => {
    try {
      let data = await getSale(req,res);
      res.render("sales/edit", { data });
    } catch (error) {
      console.log(error);
    }
  },

  updateSale: async (req, res) => {
    try {
      //Metodo GET VENTA
      console.log(req.body.idS);
      console.log(req.body.idU);
      console.log(req.body.idP);
      let resp = await axios.post(
        "https://apirest-nod.herokuapp.com/api/sales/update",
        {
          "_id": req.body.idS,
            "idFrom": {
              "_id": req.body.idU,
              "nombre": req.body.nombre,
              "apellido": req.body.apellido,
              "direccion": req.body.direccion,
              "edad": req.body.edad
            },
            "idProducto": {
              "_id": req.body.idP,
              "nombre": req.body.nombreP,
              "precio": req.body.precio,
              "cantidad": req.body.cantidad
            }, 
          "message": req.body.mensaje
        },
      );
      let {
        data: { message },
      } = resp;
      console.log(message);
      await getSales(req,res);
    } catch (error) {
      console.log(error);
    }
  },

  deleteSale: async(req,res) => {
  
    try {
      var id = req.params.id;
      //Metodo GET VENTA
      let resp = await axios.post(
        `https://apirest-nod.herokuapp.com/api/sales/${id}`
      );
      let {
        data: { message },
      } = resp;
      console.log(message);
      await getSales(req,res);
    } catch (error) {
      console.log(error);
    }
  },

};
