var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); 
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (res, req, next) {

    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 70,
                height: 70,
                crop: 'fill'    
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });

    res.render('admin/novedades', {
        Usuario: req.session.nombre, 
        novedades
    });
});

//Para Agregar Novedad

router.get('/agregarActividad', (req, res, next) => {
    res.render('admin/agregarActividad', {
    })
});

router.post('/agregarActividad', async (req, res, next) => {
    try {
        //console.log(req.files.imagen);
        var img_id= '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.tipo != "" && req.body.dias-horarios != "" 
        && req.body.fecha-inicio != "" && req.body.duracion != "" && req.body.img != "") {  //req.body.name (tomé propiedad name del form)
                await novedadesModel.insertNovedad({
                    ...req.body,
                    img_id
                });
                res.redirect('admin/novedades')
        } else {
            res.render('admin/agregarActividad', {
                error: true,
                message: 'Completar todos los campos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregarActividad', {
            error: true,
            message: 'No se pudo cargar la Novedad'
        })
    }
})

//Para Eliminar Novedad

router.get('/eliminar/:id', async (req,res,next) => {
    var id = req.params.id;

    let novedad = await  novedadesModel.getNovedadById(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id));
    }
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
});

//Para listar una sola novedad BY ID- Modificar

router.get('/modificarActividad/:id', async (req,res,next) => {
    var id = req.params.id;
    console.log(req.params.id);
    var novedad = await novedadesModel.getNovedadById(id);

    res.render('admin/modificarActividad', {
        novedad
    })
});

//Para Modificar una Novedad

router.post('/modificarActividad', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        } 
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }


        var obj ={
            Titulo: req.body.titulo,
            Descripcion: req.body.descripcion,
            Tipo: req.body.tipo,
            Dias_horarios: req.body.dias-horarios,
            Fecha_inicio: req.body.fecha-inicio,
            Duracion: req.body.duracion,
            img_id
        }

        //console.log(obj)

        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('admin/novedades');

    } catch (error) {
        console.log(error)
        res.render('admin/modificarActividad', {
            error: true,
            message: 'No se pudo modificar la novedad'
        })
    }
})



module.exports = router;