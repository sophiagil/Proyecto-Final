var pool = require('./bd');

async function getProductos() { 
    var query = 'select id_producto, Nombre, Descripcion, Cantidad, Precio_dolar from productos order by id DESC limit 5';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getProductos }