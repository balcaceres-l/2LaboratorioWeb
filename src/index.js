import express from 'express';
import autoresRouter from './routes/autores.js';
import categoriasRouter from './routes/categorias.js';
<<<<<<< HEAD
import libros from './routes/libros.js';
=======
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
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
<<<<<<< HEAD
app.use('/libros', libros);
=======
>>>>>>> 95547e47289b37a1fb198a49d014a6b1bc4f67bf
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});