import { body } from "express-validator";

const adminValidator = [
    body('user')
    .notEmpty()
    .withMessage("El nombre del admin es obligatorio."),

    body('email')
    .isEmpty()
    .isEmail()
    .withMessage("El correo electronico es obligatorio."),

    body('password')
    .isEmpty()
    .isLength({min: 8, max: 10})
    .withMessage("La contraseña es obligatoria.")
]

export default adminValidator