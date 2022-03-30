import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './middlewares';
import productRouter from './routes/productsRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use(errorMiddleware);

export default app;
