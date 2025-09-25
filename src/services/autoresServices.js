import {pool} from '../db.js';

export const getAllUsers = async () => {
    const result  = await pool.query('SELECT * FROM autores');
    return result.rows;
};


export const getUserByEmail = async (correo) => {
    const result = await pool.query('SELECT * FROM autores WHERE correo = $1', [correo]);
    return result.rows;
};

export const getBuscarNombre = async (nombre) => {
    const buscar = `%${nombre}%`;
    const result = await pool.query('SELECT * FROM autores WHERE nombre ILIKE $1', [buscar]);
    return result.rows;
};

export const postCrearAutor = async (nombre, correo) => {
    try {
        const query = `INSERT INTO autores (nombre, correo ) VALUES ($1, $2) RETURNING *;`;

        const result = await pool.query(query, [nombre, correo]);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
}

export const actualizarAutor = async (autor) => {
    const query = `UPDATE autores SET nombre=$1, correo=$2 WHERE id_autor=$3 RETURNING *;`;

    try {
        const result = await pool.query(query, autor);
        if (result.rowCount === 0) {
            throw new Error('Autor no encontrado'); 
        }
        return result.rows[0];
    } catch (err) {
        throw err; 
    }
};
export const eliminarAutor = async (id_autor) => {
    const autorAEliminar = await pool.query(`SELECT * FROM autores WHERE id_autor=$1`, [id_autor]);
    if(autorAEliminar.rowCount === 0) {
        const error = new Error('Autor no encontrado');
        error.statusCode = 404;
        throw error;
    }
    const result = await pool.query(`DELETE FROM autores WHERE id_autor=$1`, [id_autor]);
    return {message: 'Autor eliminado exitosamente', autor: autorAEliminar.rows[0]};
}
