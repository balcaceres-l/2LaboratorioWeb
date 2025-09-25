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
<<<<<<< HEAD
        const { correo } = req.params;
        const result = await autorService.getUserByEmail(correo);  
=======
        const result = await autorService.getUserByEmail();
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
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
export const putActualizarUsuario = async (req,res,next) => {
    try{
<<<<<<< HEAD
        const {id_autor} = req.params;
        const {nombre, correo} = req.body;
        const result = await autorService.actualizarAutor([nombre, correo, id_autor]);
=======
        const result = await autorService.ActualizarAutor();
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
        res.json(result);
    }catch(err){
        return next(err);
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