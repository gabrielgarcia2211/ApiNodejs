const axios = require("axios");


var users = getUsers = async (req, res) => {
  try {
    //Metodo GET User
    let resp = await axios.get(
      "https://apirest-nod.herokuapp.com/api/user"
    );
    let {
      data: { body },
    } = resp;
    //console.log(body);
    res.render("user/index", { body });
  } catch (error) {
    console.log(error);
  }
};

var idUser = getUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    //Metodo GET User
    const response = await axios.get(
      `https://apirest-nod.herokuapp.com/api/user/${id}`
    );

    let {
      data: { body },
    } = response;
    return body;
  } catch (error) {
    console.log(error);
  }
};

module.exports.UserController = {
  getUser:idUser,

  getUsers:users,
  
  ViewCreateUser:(req, res) => {
    try {
      res.render("user/create");
    } catch (error) {
      console.log(error);
    }
  },

  createUser: async (req, res) => {
    try {
      //Metodo GET USER
      let resp = await axios.post(
        "https://apirest-nod.herokuapp.com/api/user",
        {
          "nombre":  req.body.nombre,
          "apellido":  req.body.apellido,
          "direccion":  req.body.direccion,
          "edad":  req.body.edad,
        }
      );
      await getUsers(req,res);
     
    } catch (error) {
      console.log(error);
    }
  },

  ViewUpdateUser: async (req, res) => {
    try {
      let data = await getUser(req,res);
      res.render("user/edit", { data });
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (req, res) => {
    try {
      //Metodo GET USER
      let resp = await axios.post(
        "https://apirest-nod.herokuapp.com/api/user/update",
        {
          "_id": req.body.id,
          "nombre": req.body.nombre,
          "apellido":  req.body.apellido,
          "direccion":  req.body.direccion,
          "edad":  req.body.edad,
        },
      );
      let {
        data: { message },
      } = resp;
      console.log(message);
      await getUsers(req,res);
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async(req,res) => {
  
    try {
      var id = req.params.id;
      //Metodo GET USER
      let resp = await axios.post(
        `https://apirest-nod.herokuapp.com/api/user/${id}`
      );
      let {
        data: { message },
      } = resp;
      console.log(message);
      await getUsers(req,res);
    } catch (error) {
      console.log(error);
    }
  },

};
