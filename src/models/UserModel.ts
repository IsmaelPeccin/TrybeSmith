import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import connection from './connection';

export default class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  create = async (user: IUser): Promise<IUser> => {
    const queryCreate = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?);`;
    const { username, classe, level, password } = user;
    const result = await this.connection
      .execute<ResultSetHeader>(queryCreate, [username, classe, level, password]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  };
}