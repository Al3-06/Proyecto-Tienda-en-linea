import { Router } from "express"
import OrderController from "../controllers/orderController.js"

const orderRoutes = Router()


// orderRoutes.post("upDateProduct", productValidation, validationErrors, (req, res) => {
//     ProductController.create(req, res)
// })

orderRoutes.get('/adminPanel', OrderController.showOrders)
orderRoutes.get('/orders/:id', OrderController.showOrder)

export default orderRoutes;