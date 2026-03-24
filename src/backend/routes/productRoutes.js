import { Router } from "express"
import ProductController from "../controllers/productController.js"

const productRoutes = Router()


// productRoutes.post("upDateProduct", productValidation, validationErrors, (req, res) => {
//     ProductController.create(req, res)
// })

productRoutes.get('/torteria', ProductController.showProducts);
productRoutes.get('/up-date-product/:id', ProductController.showProduct);
productRoutes.delete('/up-date-product/:id', ProductController.deleteProduct);

export default productRoutes;