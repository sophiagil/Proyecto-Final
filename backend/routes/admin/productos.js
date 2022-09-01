var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');

router.get('/', async function (res, req, next) {
    var productos = await productosModel.getProductos();
    res.render('admin/seccionProductos', {
        Usuario: req.session.nombre, productos
    });
});

module.exports = router;