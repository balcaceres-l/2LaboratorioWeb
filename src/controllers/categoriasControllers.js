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
<<<<<<< HEAD
export const putActualizarCategoria = async (req, res, next) => {
    try {
        const { id_categoria } = req.params;
        const { nombre_categoria, clasificacion } = req.body;

        const result = await categoriaService.actualizarCategoria([nombre_categoria, clasificacion, id_categoria]);

        res.json(result);
    } catch (err) {
        next(err);
=======
export const putActualizarCategoria = async (req,res,next) => {
    try{
        const result = await categoriaService.actualizarCategorias();
        res.json(result);
    }catch(err){
        return next(err);
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
    }
};

export const deleteEliminarCategoria = async (req,res,next) => {
    try{
        const {id_categoria} = req.params;
<<<<<<< HEAD
        const result = await categoriaService.eliminarCategoria(id_categoria);
=======
        const result = await autorService.eliminarCategoria(id_categoria);
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
        res.status(200).json(result);
    }catch(err){
        return next(err);
    }
};