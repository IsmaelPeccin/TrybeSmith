import { Request, Response, Router } from 'express';
import OrderController from '../controller/OrderController';

const orderController = new OrderController();

const orderRouter = Router();

orderRouter.get(
  '/',
  async (req: Request, res: Response) => {
    await orderController.list(req, res);
  },
);

export default orderRouter; 
