import register from "../models/registerModel.js"

class RegisterController{
    static async create(req, res){
        let body = req.body
        try{
            let verify = await register.findByEmail(body.email)
            console.log(verify)
            if(verify != undefined){
                return res.status(400).json({
                    message: "El correo ya se encuentra registrado."
                })
            }
            await register.create(body)
            // return res.status(201).json(information)
            return res.redirect('/login')
        }
        catch(err){
            console.error(err)
            return res.status(500).json({
                message: "Error al procesar la solicitud de registro."
            })
        }
    }
}

export default RegisterController