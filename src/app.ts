import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './middlewares';
import { productRouter, userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use(errorMiddleware);

export default app;
