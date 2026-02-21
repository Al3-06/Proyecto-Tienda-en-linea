import UpDateProductModel from "../models/upDateProductModel.js"

class UpDateProductController {

    static async create(req, res) {
        const { name, description, price, stock } = req.body
        const img = req.file.path;
        try {
            await UpDateProductModel.create({ name, description, price, img, stock })
            // return res.status(201).json(newProduct)
            return res.redirect('/adminPanel')
        }
        catch (err) {
            console.error(err)
            return res.status(500).json({
                message: "Error al procesar la solicitud de producto."
            })
        }
    }

    static async delete(req, res) {
        const {} = req.body
        try {
            const productId = await UpDateProductModel.delete(productId)
             return res.redirect('/adminPanel')
        }
        catch (err) {
            console.error(err)
            return res.status(500).json({
                message: "Error al procesar la solicitud de eliminación de producto."
            })
        }
    }
}

export default UpDateProductController