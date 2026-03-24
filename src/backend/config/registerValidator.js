import { body } from "express-validator";

const registerValidator = [
    body('user')
    .notEmpty()
    .withMessage("El nombre para su usuaruio es obligatorio."),

    body('email')
    .notEmpty()
    .isEmail()
    .withMessage("El correo electronico es obligatoria."),

    body('password')
    .notEmpty()
    .withMessage("La contraseña es obligatoria.")
    .isLength({ min: 8, max: 10 })
    .withMessage("La contraseña debe tener entre 8 y 10 caracteres.")
]

export default registerValidator