var pool = require('./bd');

async function getNovedades() { 
    var query = 'select * from novedades_errores order by id DESC limit 5';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getNovedades }