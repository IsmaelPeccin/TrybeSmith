import { Request, Response } from 'express';
import ProductService from '../service/ProductService';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async list(_req: Request, res: Response) {
    const allProducts = await this.productService.list();
    return res.status(200).json(allProducts);
  }

  async create(req: Request, res: Response) {
    const product = req.body;
    const newProduct = await this.productService.create(product);
    return res.status(201).json({ item: newProduct });
  }
} 