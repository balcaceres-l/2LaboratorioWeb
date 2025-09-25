import { pool } from '../db.js';

export const getAllLibros = async () => {
    const result = await pool.query('SELECT * FROM libros');
    return result.rows;
};

export const getBuscarTitulo = async (titulo) => {
    const buscar = `%${titulo}%`;
    const result = await pool.query('SELECT * FROM libros WHERE titulo ILIKE $1', [buscar]);
    return result.rows;
};

export const postCrearLibro = async (titulo, anio_publicacion, autor_id, categoria_id) => {
    try {
        const query = `
            INSERT INTO libros (titulo, anio_publicacion, autor_id, categoria_id) VALUES ($1, $2, $3, $4) RETURNING *; `;
        const result = await pool.query(query, [titulo, anio_publicacion, autor_id, categoria_id]);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
};
export const actualizarLibro = async (id_libro, { titulo, anio_publicacion, autor_id, categoria_id }) => {
    try {
        const query = `UPDATE libros SET titulo = $1, anio_publicacion = $2, autor_id = $3, categoria_id = $4
          WHERE id_libro = $5 RETURNING *;`;
        const result = await pool.query(query, [titulo, anio_publicacion, autor_id, categoria_id, id_libro]);
        if (result.rowCount === 0) {
            const error = new Error('Libro no encontrado');
            error.statusCode = 404;
            throw error;
        }
        return result.rows[0];
    } catch (err) {
        throw err;
    }
};

export const eliminarLibro = async (id_libro) => {
    const libroAEliminar = await pool.query(`SELECT * FROM libros WHERE id_libro=$1`, [id_libro]);
    if (libroAEliminar.rowCount === 0) {
        const error = new Error('Libro no encontrado');
        error.statusCode = 404;
        throw error;
    }
    await pool.query(`DELETE FROM libros WHERE id_libro=$1`, [id_libro]);
    return { message: 'Libro eliminado exitosamente', libro: libroAEliminar.rows[0] };
};
export const getBuscarPorAnio = async (anio_publicacion) => {
    const result = await pool.query(
        'SELECT * FROM libros WHERE anio_publicacion = $1',
        [anio_publicacion]
    );
    return result.rows;
};

export const getBuscarPorAutor = async (autor_id) => {
    const result = await pool.query(
        'SELECT * FROM libros WHERE autor_id = $1',
        [autor_id]
    );
    return result.rows;
};

export const getBuscarPorCategoria = async (categoria_id) => {
    const result = await pool.query(
        'SELECT * FROM libros WHERE categoria_id = $1',
        [categoria_id]
    );
    return result.rows;
};

export const getBuscarPorClasificacion = async (clasificacion) => {
    const buscar = `%${clasificacion}%`;
    const result = await pool.query(
        `SELECT l.* FROM libros l JOIN categorias c ON l.categoria_id = c.id_categoria WHERE c.clasificacion ILIKE $1`, [buscar]
    );
    return result.rows;
};