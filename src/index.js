import express from 'express';
import autoresRouter from './routes/autores.js';
import libros from './routes/libros.js';
import categoriasRouter from './routes/categorias.js';
import libros from './routes/libros.js';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler.js'; 
dotenv.config();
const app = express();
app.use(express.json());

app.get('/',(req,res)=> {
    res.send('El servidor está funcionando correctamente.');
});

app.use('/autores', autoresRouter);
app.use('/categorias', categoriasRouter);
app.use('/libros', libros);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});