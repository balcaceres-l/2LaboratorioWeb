import { Router } from 'express';
import * as libroController from '../controllers/librosController.js';
import { createLibroValidators, runValidations } from '../middlewares/validators.js';

const router = Router();

router.get('/', libroController.getObtenerTodosLosLibros);
router.get('/buscarPorTitulo/:titulo', libroController.getBuscarTitulo);
router.get('/buscarPorAnio/:anio', libroController.getBuscarPorAnio);
router.get('/buscarPorAutor/:autor_id', libroController.getBuscarPorAutor);
router.get('/buscarPorCategoria/:categoria_id', libroController.getBuscarPorCategoria);
router.get('/buscarPorClasificacion/:clasificacion', libroController.getBuscarPorClasificacion);

router.post('/', runValidations(createLibroValidators), libroController.postCrearLibro);
router.put('/:id_libro', libroController.putActualizarLibro);
router.delete('/:id_libro', libroController.deleteEliminarLibro);

export default router;