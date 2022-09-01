var express = require('express');
var router = express.Router();
var actividadesModel = require('../../models/actividadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); 
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (res, req, next) {
    var actividades = await actividadesModel.getActividades();
    res.render('admin/seccionActividades', {
        Usuario: req.session.nombre, 
        actividades
    });
});

//Para Agregar Novedad
router.get('/altasActividades', (req, res, next) => {
    res.render('admin/altasActividades', {
    })
});

router.post('/altasActividades', async (req, res, next) => {
    try {
        if (req.body.Titulo != "" && req.body.Descripcion != "" && req.body.Tipo != "" && req.body.Dias_horarios != "" && req.body.Fecha_inicio != "" && req.body.Duracion != "" && req.body.Precio != "") {
                await actividadesModel.insertActividad(req.body);
                res.redirect('admin/seccionActividades')
        } else {
            res.render('admin/altasActividades', {
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/altasActividades', {
            error: true,
            message: 'No se pudo cargar la Novedad'
        })
    }
})

//Para Eliminar Novedad

router.get('/eliminar/:id_actividad', async (req,res,next) => {
    var id_actividad = req.params.id;

    let actividad = await  actividadesModel.getActividadById(id);
    if (actividad.img_id) {
        await (destroy(actividad.img_id));
    }
    await actividadesModel.deleteActividadById(id_actividad);
    res.redirect('/admin/seccionActividades');
});

//Para listar una sola novedad BY ID- Modificar

router.get('/modificarActividades', async (req,res,next) => {
    try{
        let img_id =req.body.img_original;
        let borrar_img_anterior = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_anterior =true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_anterior = true;
            }
        }
        if (borrar_img_anterior && req.body.img_original) {
            await (destroy(req.body.img_original));
        }




        var obj= {
            Titulo: req.body.Titulo
            Descripcion: req.body.Descripcion
            Tipo: req.body.Tipo
            Dias_horarios: req.body.Dias_horarios
            Fecha_inicio: req.body.Fecha_inicio
            Duracion: req.body.Duracion
            Precio: req.body.Precio
        }
        //console.log(req.body)

        await actividadesModel.modificarActividadesById(obj, req.body.id);
        res.redirect('/admin/seccionActividades', {
            error: true,
            message: "No se modifico la novedad"
        })
    }
    
    });
});

//Para Modificar la Novedad

router.post('/modificarActividades/, async (req,res,next) => {
    var id_actividad = req.params.id;
    console.log(req.params.id);
    var actividad= await actividadesModel.getActividadById(id);
    
    res.render('admin/modificarActividad', {
        actividad
    });
});


module.exports = router;