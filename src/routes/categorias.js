import {Router} from 'express';
import * as categoriaController from '../controllers/categoriasControllers.js';
import {createCategoryValidators, runValidations} from '../middlewares/validators.js';

const router = Router();

router.get('/',categoriaController.getObtenerTodasLasCategorias);
router.get('/buscarPorNombre/:nombre_categoria', categoriaController.getBuscarNombre);
router.post('/', runValidations(createCategoryValidators),categoriaController.postCrearCategoria);
router.put('/:id_categoria', categoriaController.putActualizarCategoria);
router.delete('/:id_categoria', categoriaController.deleteEliminarCategoria);

export default router;