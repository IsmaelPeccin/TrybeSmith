import { IUser } from '../interfaces';
import UserModel from '../models/UserModel';
import jwtGenerator from '../helpers/jwtGenerator';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  create = async (user: IUser): Promise<string> => {
    const { id, username } = await this.userModel.create(user);

    return jwtGenerator({ id, username });
  };
}
