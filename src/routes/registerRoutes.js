import { Router } from "express"
import { validationResult } from "express-validator"
import createLoginValidation from "../config/registerValidator.js"
import RegisterController from "../controllers/registerController.js"

const registerRoutes = Router()

function validationErrors(req, res, next) {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(400).json({
            message: "Error en la validacion del registro",
            errors: err.array()
        })
    }
    next()
}

registerRoutes.post("/register", createLoginValidation, validationErrors, (req, res) => {
    RegisterController.create(req, res)
})

export default registerRoutes