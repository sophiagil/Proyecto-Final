var pool = require('./bd');

async function getInscripciones() { 
    var query = 'select id_inscripcion, Nombres, Apellidos, Mail, Telefono, Precio, Fecha_pago from inscripciones order by id DESC limit 5';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getInscripciones }