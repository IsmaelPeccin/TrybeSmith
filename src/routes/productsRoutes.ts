import { Request, Response, Router } from 'express';
import ProductController from '../controller/ProductController';
import { nameValidate, amountValidate } from '../middlewares';

const productController = new ProductController();

const productRouter = Router();

productRouter.get(
  '/',
  async (req: Request, res: Response) => {
    await productController.list(req, res);
  },
);

productRouter.post(
  '/',
  amountValidate,
  nameValidate,
  async (req: Request, res: Response) => {
    await productController.create(req, res);
  },
);

export default productRouter; 