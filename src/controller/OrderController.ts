import { Request, Response } from 'express';
import OrderService from '../service/OrderService';

export default class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async list(_req: Request, res: Response) {
    const allOrders = await this.orderService.list();

    const orders = allOrders.map((order) => ({
      id: order.id,
      userId: order.userId,
      products: [order.products],
    }));
    return res.status(200).json(orders);
  }
}