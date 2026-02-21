import { Router } from "express"
import { validationResult } from "express-validator"
import productValidation from "../config/productValidator.js"
import UpDateProductController from "../controllers/upDateProductController.js"
import multer from "multer"

const upDateProductRoutes = Router()
const upload = multer({ dest: 'uploads/' })

function validationErrors(req, res, next) {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({
            message: "Error en la validacion del producto.",
            errors: err.array()
        })
    }
    next()
}

upDateProductRoutes.post("/upDateProduct", upload.single('img'), productValidation, validationErrors, (req, res) => {
    UpDateProductController.create(req, res)
})

export default upDateProductRoutes;