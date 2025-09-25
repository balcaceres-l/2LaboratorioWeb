import * as libroService from '../services/librosService.js';

export const getObtenerTodosLosLibros = async (req, res, next) => {
    try {
        const result = await libroService.getAllLibros();
        res.json(result);
    } catch (err) {
        next(err);
    }
};

export const getBuscarTitulo = async (req, res, next) => {
    try {
        const { titulo } = req.params;
        const result = await libroService.getBuscarTitulo(titulo);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

export const postCrearLibro = async (req, res, next) => {
    try {
        const { titulo, anio_publicacion, autor_id, categoria_id } = req.body;
        const newLibro = await libroService.postCrearLibro(titulo, anio_publicacion, autor_id, categoria_id);
        res.status(201).json(newLibro);
    } catch (err) {
        next(err);
    }
};

export const putActualizarLibro = async (req, res, next) => {
    try {
        const { id_libro } = req.params;
        const result = await libroService.actualizarLibro(id_libro, req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

export const deleteEliminarLibro = async (req, res, next) => {
    try {
        const { id_libro } = req.params;
        const result = await libroService.eliminarLibro(id_libro);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};
export const getBuscarPorAnio = async (req, res, next) => {
    try {
        const { anio } = req.params;
        const result = await libroService.getBuscarPorAnio(anio);
        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getBuscarPorAutor = async (req, res, next) => {
    try {
        const { autor_id } = req.params;
        const result = await libroService.getBuscarPorAutor(autor_id);
        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getBuscarPorCategoria = async (req, res, next) => {
    try {
        const { categoria_id } = req.params;
        const result = await libroService.getBuscarPorCategoria(categoria_id);
        res.json(result);
    } catch (err) {
        return next(err);
    }
};

export const getBuscarPorClasificacion = async (req, res, next) => {
    try {
        const { clasificacion } = req.params;
        const result = await libroService.getBuscarPorClasificacion(clasificacion);
        res.json(result);
    } catch (err) {
        return next(err);
    }
};