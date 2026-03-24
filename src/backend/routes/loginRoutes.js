import { Router } from "express"
import { validationResult } from "express-validator"
import createLoginValidation from "../config/loginValidator.js"
import LoginController from "../controllers/loginController.js"

const loginRoutes = Router()

function validatorErrors(req, res, next) {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        res.status(400).json({
            message: "Error en la validación del login",
            errors: err.array()
        })
        return res.redirect('/login')
        
    }
    next()
}

loginRoutes.post("/login", createLoginValidation, validatorErrors, (req, res) => {
    LoginController.login(req, res)
})

export default loginRoutes
