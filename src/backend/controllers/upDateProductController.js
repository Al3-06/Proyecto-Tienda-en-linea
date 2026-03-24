import UpDateProductModel from "../models/upDateProductModel.js"

class UpDateProductController {

    static async create(req, res) {
        const { name, description, price, stock } = req.body
        const img = req.file.path;
        try {
            await UpDateProductModel.create({ name, description, price, img, stock })
            // return res.status(201).json(newProduct)
            return res.json({
                message: "Producto creado exitosamente."
            });
        }
        catch (err) {
            console.error(err)
            return res.status(500).json({
                message: "Error al procesar la solicitud de producto."
            })
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await UpDateProductModel.delete(id);
            return res.json({
                message: "Producto eliminado exitosamente."
            });
        }
        catch (err) {
            console.error(err)
            return res.status(500).json({
                message: "Error al procesar la solicitud de eliminación de producto."
            })
        }
    }

    static async upDate(req, res) {
        try {
            const id  = req.params.id;
            const data = req.body;

            console.log("ID del producto a actualizar:", id);
            console.log("Datos recibidos para actualización:", data);
            
            const result = await UpDateProductModel.edit(id, data);
            if (result) {
                res.json(result);
            } else {
                res.status(404).json({ 
                    message: "Producto no encontrado",
                data: data });
            }
        }
        catch (err) {
            console.error(err)
            return res.status(500).json({
                message: "Error al procesar la solicitud de actualización de producto.",
                error: err.message
            })
        }
    }
}

export default UpDateProductController