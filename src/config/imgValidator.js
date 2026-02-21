import { body } from "express-validator";

const imgValidator = [
    body('img')
    .notEmpty()
    .withMessage("La imagen para el producto es necesaria."),
]