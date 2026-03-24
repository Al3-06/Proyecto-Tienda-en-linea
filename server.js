import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './src/backend/routes/productRoutes.js';
import orderRoutes from './src/backend/routes/orderRoutes.js';
import loginRoutes from './src/backend/routes/loginRoutes.js';
import registerRoutes from './src/backend/routes/registerRoutes.js';
import upDateProductRoutes from './src/backend/routes/upDateProductRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', loginRoutes);
app.use('/api', registerRoutes);
app.use('/api', upDateProductRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});