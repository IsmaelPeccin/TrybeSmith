import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces';
import connection from './connection';

export default class OrderModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  list = async (): Promise<IOrder[]> => {
    const query = `SELECT o.id, o.userId, p.id AS products
    FROM Trybesmith.Orders AS o
    JOIN Trybesmith.Products AS p
    ON p.orderId = o.id ;`;
  
    const result = await this.connection.execute(query);

    const [rows] = result;

    return rows as IOrder[];
  };
}