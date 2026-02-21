import ProductModel from "../models/productModel.js";
import OrderModel from "../models/orderModel.js"

class ProductController{
    
    static async showProducts(req, res) {
        try {
            const products = await ProductModel.show()
            const orders = await OrderModel.show()
            res.render('adminPanel', {
                products: products,
                orders: orders
            })

        } catch (err) {
            console.error(err)
            res.status(500).send("Error interno del servidor al cargar los productos.")
        }
    }
}

export default ProductController