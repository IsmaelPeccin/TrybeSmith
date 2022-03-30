import { IOrder } from '../interfaces';
import OrderModel from '../models/OrdersModel';

export default class OrderService {
  private orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel();
  }

  list = async (): Promise<IOrder[]> => {
    const allOrders = await this.orderModel.list();
    return allOrders;
  };
}