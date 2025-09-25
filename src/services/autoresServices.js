import {pool} from '../db.js';

export const getAllUsers = async () => {
    const result  = await pool.query('SELECT * FROM autores');
    return result.rows;
};


<<<<<<< HEAD
export const getUserByEmail = async (correo) => {
    const result = await pool.query('SELECT * FROM autores WHERE correo = $1', [correo]);
    return result.rows;
=======
export const getUserByEmail = async (req,res) => {
    const { correo } = req.params;
    try{
        const result = await pool.query('SELECT * FROM autores WHERE correo = $1', [correo]);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({error: err.message});
    }
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
};

export const getBuscarNombre = async (nombre) => {
    const buscar = `%${nombre}%`;
<<<<<<< HEAD
    const result = await pool.query('SELECT * FROM autores WHERE nombre ILIKE $1', [buscar]);
=======
    const result = await pool.query('SELECT * FROM autores WHERE nombre LIKE $1', [buscar]);
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
    return result.rows;
};

export const postCrearAutor = async (nombre, correo) => {
    try {
<<<<<<< HEAD
        const query = `INSERT INTO autores (nombre, correo ) VALUES ($1, $2) RETURNING *;`;
=======
        const query = `INSERT INTO autores (nombre, correo ) RETURNING *;`;
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf

        const result = await pool.query(query, [nombre, correo]);
        return result.rows[0];
    } catch (err) {
        throw err;
    }
}

<<<<<<< HEAD
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
=======
export const actualizarAutor = async (autor) =>{
    const query = `UPDATE autores SET nombre=$1, correo=$2 RETURNING *;`

    try{
        const result = await pool.query(query, autor);

        if(result.rowCount === 0) return result.status(404).json({message: 'Autor no encontrado'});
        return result.rows[0];
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
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
