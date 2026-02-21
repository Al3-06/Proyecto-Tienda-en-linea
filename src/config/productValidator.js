import { body, check } from "express-validator";

const productValidator = [
    body('name')
        .notEmpty()
        .isLength({ max: 255 })
        .withMessage("El nombre es necesario para el producto."),

    body('description')
        .optional()
        .isLength({ max: 255 }),

    body('price')
        .notEmpty()
        .isFloat()
        .withMessage("El precio del producto es obligatorio."),

    check('img')
        .custom((value, { req }) => {
            if (!req.file) {
                throw new Error("La imagen del producto es obligatoria.");
            }
            return true;
        }),

    body('stock')
        .notEmpty()
        .isNumeric()
        .withMessage("El stock del producto es necesario.")
]

export default productValidator