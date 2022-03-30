import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IListAllProducts, IAddProduct } from '../interfaces';
import connection from './connection';

export default class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  list = async (): Promise<IListAllProducts[]> => {
    const query = 'SELECT * FROM Trybesmith.Products;';
  
    const result = await this.connection.execute(query);

    const [rows] = result;

    return rows as IListAllProducts[];
  };

  create = async (product: IAddProduct): Promise<IAddProduct> => {
    const queryCreate = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(queryCreate, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  };
}