import ProductModel from "../models/productModel.js";
import OrderModel from "../models/orderModel.js";

class ProductController{

    static async showProducts(req, res) {
        try {
            const products = await ProductModel.show();
            const orders = await OrderModel.show();

            res.json({
                products: products,
                orders: orders
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Error al cargar datos.",
                error: err.message
            });
        }
    }

        static async showProduct(req, res) {
        try {
            const product = await ProductModel.showByid(req.params.id);

            res.json({
                product: product
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Error al cargar datos.",
                error: err.message
            });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const product = await ProductModel.delete(req.params.id);
            return res.json({
                product: product
            });
        }
        catch (err) {
            console.error(err)
            res.status(500).json({
                message: "Error al procesar la solicitud de eliminación de producto."
            })
        }
    }

}

export default ProductController;