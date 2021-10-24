const express = require('express')



module.exports.IndexAPI = (app) => {

    const router = express.Router();
    
    app.get("/", (req, res) => {
        res.render("index");
    });

    app.use("/", router);

}

