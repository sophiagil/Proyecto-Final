var pool = require('./bd');

async function getSecciones() { 
    var query = 'select * from secciones order by id DESC limit 5';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getSecciones }