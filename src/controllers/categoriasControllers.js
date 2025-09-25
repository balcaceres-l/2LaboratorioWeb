import * as categoriaService from '../services/categoriasServices.js';

export const getObtenerTodasLasCategorias = async (req,res,next) => {
    try{
        const result = await categoriaService.getAllCategories();
        res.json(result);
    }catch(err){
        return next(err);
    }
};

export const getBuscarNombre = async (req,res,next) => {
    try{
        const result = await categoriaService.getBuscarNombre();
        res.json(result);
    }catch(err){
        return next(err);
    }
};

export const postCrearCategoria = async (req,res,next) => {
    try{
        const{nombre_categoria,clasificacion} = req.body;
        const newCategoria = await categoriaService.postCrearCategoria(nombre_categoria,clasificacion);
        res.status(201).json(newCategoria);
    }catch(err){
        return next(err);
    }
};
export const putActualizarCategoria = async (req,res,next) => {
    try{
        const result = await categoriaService.actualizarCategorias();
        res.json(result);
    }catch(err){
        return next(err);
    }
};

export const deleteEliminarCategoria = async (req,res,next) => {
    try{
        const {id_categoria} = req.params;
        const result = await autorService.eliminarCategoria(id_categoria);
        res.status(200).json(result);
    }catch(err){
        return next(err);
    }
};