import OrderModel from '../models/orderModel.js'

class OrderController{
        static async showOrders(req, res) {
        try {
            const orders = await OrderModel.show();

            res.json({
                orders: orders
            });

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Error interno del servidor al cargar los pedidos.",
                error: err.message
            });
        }
    }

    static async showOrder(req, res) {
        try {
            const order = await OrderModel.showById(req.params.id);
            if (!order) {
                return res.status(404).json({ message: 'Pedido no encontrado.' });
            }
            res.json({ order });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: 'Error interno del servidor al cargar el pedido.',
                error: err.message
            });
        }
    }
}

export default OrderController