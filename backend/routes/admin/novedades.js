var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');

router.get('/', async function (res, req, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/panelAdmin', {
        Usuario: req.session.nombre, novedades
    });
});

module.exports = router;