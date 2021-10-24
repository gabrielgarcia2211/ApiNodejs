const express = require('express')



module.exports.IndexAPI = (app) => {

    const router = express.Router();

    router.get("/", (req,res) => {
        
        const menu = {
            products : `http://${req.headers.host}/res/products`,
            user : `http://${req.headers.host}/res/user`,
            sales : `http://${req.headers.host}/res/sales`
        }

        res.render("index");

    })

    


    app.use("/", router);

}

