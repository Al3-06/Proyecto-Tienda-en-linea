import { Router } from "express"
import ProductController from "../controllers/productController.js"

const productRoutes = Router()


// productRoutes.post("upDateProduct", productValidation, validationErrors, (req, res) => {
//     ProductController.create(req, res)
// })

productRoutes.get('/adminPanel', ProductController.showProducts)

export default productRoutes;