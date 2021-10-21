const axios = require("axios");

module.exports.ProductController = {
  getProducts: async (req, res) => {
    try {
      //Metodo general
      let resp = await axios.get(
        "https://apirest-nod.herokuapp.com/api/products"
      );
      let {
        data: { body },
      } = resp;
      console.log(body);
      res.render('index', {body});
      //res.json(body);
      
    } catch (error) {
      console.log(error);
    }
  },
};
