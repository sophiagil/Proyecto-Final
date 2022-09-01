var express = require('express');
var router = express.Router();
var inscripcionesModel = require('../../models/inscripcionesModel');

router.get('/', async function (res, req, next) {
    var inscripciones = await inscripcionesModel.getInscripciones();
    res.render('admin/inscripciones', {
        Usuario: req.session.nombre, 
        inscripciones
    });
});

module.exports = router;