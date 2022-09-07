var pool = require('./bd');

async function getNovedades() { 
    var query = 'select * from actividades order by id DESC limit 4';
    var rows = await pool.query(query);
    return rows;
}

//Para Agregar Novedad
async function insertNovedad(obj) {
    try {
        var query = "insert into actividades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

//Para Eliminar Novedad

async function deleteNovedadById(id) {
    var query = 'delete from actividades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//Para Modificar desde la vista una Novedad

async function getNovedadById(id) {
        var query = "select * from actividades where id = ?";
        var rows = await pool.query(query, [id]);
        return rows[0];
}

//Para Modificar UPDATE de los datos

async function modificarNovedadById(obj, id) {
    try {
    var query = "update actividades set ? where id =?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
    } catch (error) {
        throw error;
    }
}

 
module.exports = { getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById }