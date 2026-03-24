import { body } from "express-validator";

const loginValidator = [
    body('email')
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio.")
    .isEmail()
    .withMessage("El formato del correo electrónico es inválido."),

    body('password')
    .notEmpty()
    .withMessage("La contraseña es obligatoria.")
    .isLength({ min: 8, max: 10 })
    .withMessage("La contraseña debe tener entre 8 y 10 caracteres.")
]

export default loginValidator