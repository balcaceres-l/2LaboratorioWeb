import {Router} from 'express';
import * as autorController from '../controllers/autoresControllers.js';
import {createAutorValidators, runValidations} from '../middlewares/validators.js';

const router = Router();

router.get('/',autorController.getObtenerTodosLosUsuarios);
router.get('/buscarPorEmail/:correo', autorController.getObtenerPorEmail);
router.get('/buscarPorNombre/:nombre', autorController.getBuscarNombre);
router.post('/', runValidations(createAutorValidators),autorController.postCrearUsuario);
router.put('/:id_autor', autorController.putActualizarUsuario);
router.delete('/:id_autor', autorController.deleteEliminarUsuario);

export default router;