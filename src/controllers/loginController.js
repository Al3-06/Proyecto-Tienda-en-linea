import AdminModel from "../models/adminModel.js"


class LoginController {
    static async login(req, res) {
        const { email, password } = req.body
        try {
            const admin = await AdminModel.findByEmail(email)
            if (!admin) {
                return res.status(401).json({
                    message: "La contraseña no esta registrada."
                })
            }
            if (admin.admin_password !== password) {
                return res.status(401).json({
                    message: "La contraseña es incorrecta."
                })
            }

            // return res.status(201).json({
            //     success: true,
            //     message: "Inicio de sesión exitoso",
            // })
            return res.redirect('/adminPanel')
            
            
        }
        catch (err) {
            console.error(err)
            return res.status(500).json({
                message: "Error al procesar la solicitud de login."
            })
        }
    }
}

export default LoginController