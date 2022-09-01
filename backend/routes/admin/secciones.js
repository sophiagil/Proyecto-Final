var express = require('express');
var router = express.Router();
var seccionesModel = require('../../models/seccionesModel');

router.get('/', async function (res, req, next) {
    var secciones = await seccionesModel.getSecciones();
    res.render('admin/paginasAdmin', {
        Usuario: req.session.nombre, secciones
    });
});

module.exports = router;