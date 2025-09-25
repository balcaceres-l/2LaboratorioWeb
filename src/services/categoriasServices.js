import {pool} from '../db.js';

export const getAllCategories = async () => {
    const result  = await pool.query('SELECT * FROM categorias');
    return result.rows;
};


export const getBuscarNombre = async (nombre_categoria) => {
    const buscar = `%${nombre_categoria}%`;
<<<<<<< HEAD
    const result = await pool.query('SELECT * FROM categorias WHERE nombre_categoria ILIKE $1', [buscar]);
=======
    const result = await pool.query('SELECT * FROM categorias WHERE nombre_categoria LIKE $1', [buscar]);
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
    return result.rows;
};

export const postCrearCategoria = async (nombre_categoria, clasificacion) => {
    try {
<<<<<<< HEAD
        const query = `INSERT INTO categorias (nombre_categoria, clasificacion ) VALUES ($1, $2) RETURNING *;`;
=======
        const query = `INSERT INTO categorias (nombre_categoria, clasificacion ) RETURNING *;`;
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf

        const result = await pool.query(query, [nombre_categoria, clasificacion]);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
}

<<<<<<< HEAD
export const actualizarCategoria = async (categoria) => {
    const query = `UPDATE categorias SET nombre_categoria=$1, clasificacion=$2 WHERE id_categoria=$3 RETURNING *;`;
    try {
        const result = await pool.query(query, categoria);
        if (result.rowCount === 0) {
            throw new Error('Categoría no encontrada');
        }
        return result.rows[0];
    } catch (err) {
        throw err;
    }
};
=======
export const actualizarCategorias = async (categoria) =>{
    const query = `UPDATE categorias SET nombre=$1, clasificacion=$2 RETURNING *;`

    try{
        const result = await pool.query(query, categoria);

        if(result.rowCount === 0) return result.status(404).json({message: 'Categoria no encontrado'});
        return result.rows[0];
    }catch(err){
        res.status(500).json({error: err.message});
    }
}
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf

export const eliminarCategoria = async (id_categoria) => {
    const categoriaAEliminar = await pool.query(`SELECT * FROM categorias WHERE id_categoria=$1`, [id_categoria]);
    if(categoriaAEliminar.rowCount === 0) {
        const error = new Error('Categoria no encontrado');
        error.statusCode = 404;
        throw error;
    }
    const result = await pool.query(`DELETE FROM categorias WHERE id_categoria=$1`, [id_categoria]);
    return {message: 'Categoria eliminada exitosamente', categoria: categoriaAEliminar.rows[0]};
}