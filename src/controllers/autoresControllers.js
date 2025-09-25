import * as autorService from '../services/autoresServices.js';

export const getObtenerTodosLosUsuarios = async (req,res,next) => {
    try{
        const result = await autorService.getAllUsers();
        res.json(result);
    }catch(err){
        return next(err);
    }
};

export const getObtenerPorEmail = async (req,res,next) => {
    try{
        const { correo } = req.params;
        const result = await autorService.getUserByEmail(correo);  
        res.json(result);
    }catch(err){
        return next(err);
    }
};
export const getBuscarNombre = async (req,res,next) => {
    try{
        const result = await autorService.getBuscarNombre();
        res.json(result);
    }catch(err){
        return next(err);
    }
};

export const postCrearUsuario = async (req,res,next) => {
    try{
        const{nombre,correo} = req.body;
        const newAutor = await autorService.postCrearAutor(nombre,correo);
        res.status(201).json(newAutor);
    }catch(err){
        return next(err);
    }
};
export const putActualizarCategoria = async (req, res, next) => {
    try {
        const { id_categoria } = req.params;
        const { nombre_categoria, clasificacion } = req.body;

        const result = await categoriaService.actualizarCategoria([nombre_categoria, clasificacion, id_categoria]);

        res.json(result);
    } catch (err) {
        next(err);
    }
};

export const deleteEliminarUsuario = async (req,res,next) => {
    try{
        const {id_autor} = req.params;
        const result = await autorService.eliminarAutor(id_autor);
        res.status(200).json(result);
    }catch(err){
        return next(err);
    }
};