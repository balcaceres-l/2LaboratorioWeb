import {body, validationResult} from 'express-validator';

export const runValidations = (validations) =>{
    return async (req,res,next) => {
        for(const validation of validations){
            await validation.run(req);
        }
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }

        return res.status(400).json({
            status: 'error',
            errors: errors.array()
        });
    };
};


export const createAutorValidators = [
    body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('El nombre solo debe contener letras y espacios'),

    body('correo')
    .trim()
    .isEmail()
    .withMessage('El correo no es válido'),
];

export const createCategoryValidators = [
    body('nombre_categoria')
    .trim()
    .notEmpty()
    .withMessage('El nombre de la categoría es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('El nombre de la categoría solo debe contener letras y espacios'),
    
    body('clasificacion')
    .notEmpty()
    .withMessage('La clasificación es obligatoria')
];
export const createLibroValidators = [
    body('titulo')
        .trim()
        .notEmpty()
        .withMessage('El título es obligatorio')
        .isLength({ min: 10 })
        .withMessage('El título debe tener al menos 10 caracteres'),
    body('anio_publicacion')
        .notEmpty()
        .withMessage('El año de publicación es obligatorio')
        .isInt({ min: 1901 })
        .withMessage('El año de publicación debe ser mayor a 1900'),
    body('autor_id')
        .optional({ nullable: true })
        .isUUID()
        .withMessage('El autor_id debe ser un UUID válido'),
    body('categoria_id')
        .optional({ nullable: true })
        .isUUID()
        .withMessage('El categoria_id debe ser un UUID válido'),
];