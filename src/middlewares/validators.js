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
    .withMessage('El nombre es obligatorio'),

    body('correo')
    .trim()
    .isEmail()
    .withMessage('El correo no es válido'),
];

export const createCategoryValidators = [
    body('nombre_categoria')
    .trim()
    .notEmpty()
    .withMessage('El nombre de la categoría es obligatorio'), 
    
    body('clasificacion')
    .notEmpty()
    .withMessage('La clasificación es obligatoria')
];

