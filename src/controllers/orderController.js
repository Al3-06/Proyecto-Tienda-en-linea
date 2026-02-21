import OrderModel from '../models/orderModel.js'

class OrderController{
        static async showOrders(req, res) {
        try {
            const orders = await OrderModel.show();
            
            res.render('adminPanel', {
                orders: orders
            })

        } catch (err) {
            console.error(err);
            res.status(500).send("Error interno del servidor al cargar los productos.");
        }
    }
}

export default OrderController