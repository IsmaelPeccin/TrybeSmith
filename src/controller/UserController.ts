import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async create(req: Request, res: Response) {
    const user = req.body;
    const token: string = await this.userService.create(user);
    if (!token) {
      return res.status(400).json({ error: 'Deu Ruim' });
    }
    return res.status(201).json({ token });
  }
} 
