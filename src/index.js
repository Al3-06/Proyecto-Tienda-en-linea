import express from "express"
import path from "path"
import body_parser from "body-parser"
import { fileURLToPath } from "url"
import registerRoutes from "./routes/registerRoutes.js"
import loginRoutes from "./routes/loginRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import upDateProductRoutes from "./routes/upDateProductRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const start = express()
const port = 8080
start.use(express.static(path.join(__dirname, 'public')))
start.set('view engine', 'ejs')
start.set('views', path.join(__dirname, 'public', 'views'))

start.use(body_parser.urlencoded({extended: false}))
start.use(express.json())

start.get("/register", (req, res) => {
    console.log(__dirname)
    res.render('register')
})

start.get("/login", (req, res) => {
    console.log(__dirname)
    res.render('login')
})

// start.get("/adminPanel", (req, res) => {
//     console.log(__dirname)
//     res.render('adminPanel')
// })

start.get("/admins", (req, res) => {
    console.log(__dirname)
    res.render('admins')
})

start.get("/upDateProduct", (req, res) => {
    console.log(__dirname)
    res.render('upDateProduct')
})

start.get("/start", (req, res) => {
    console.log(__dirname)
    res.render('start')
})

start.use([registerRoutes, loginRoutes, productRoutes, upDateProductRoutes, orderRoutes])

start.listen(port, () => {
    console.log("Web en linea http://localhost:8080/login")
})