var pool = require('./bd');

async function getActividades() { 
    var query = 'select id_actividad, Titulo, Descripcion, Tipo, Dias_horarios, Fecha_inicio, Precio from actividades order by id DESC limit 5';
    var rows = await pool.query(query);
    return rows;
}

//Para Agregar Novedad
async function insertActividad(obj) {
    try {
        var query = "insert into actividades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

//Para Eliminar Novedad
async function deleteActividadById(id) {
    var query = 'delete from actividades where id_actividad = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//Para Modificar desde la vista una Novedad

async function getActividadById(id) {
        var query = "select * from actividades where id_actividad = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
}

//Para Modificar UPDATE de los datos

async function modificarActividadById(obj, id) {
    try {
    var query = "update actividades set ? where id_actividad =?";
    var rows = await pool.query(query, [obj, id]);
    return rows[0];
    } catch (error) {
        throw error;
    }
}

 

module.exports = { getActividades, insertActividad, deleteActividadById, getActividadById }