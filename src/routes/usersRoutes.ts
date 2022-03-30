import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';
import { usernameValidate, classeValidate, levelValidate, passwordValidate } from '../middlewares';

const userController = new UserController();

const userRouter = Router();

userRouter.post(
  '/',
  usernameValidate,
  classeValidate,
  levelValidate,
  passwordValidate,
  async (req: Request, res: Response) => {
    await userController.create(req, res);
  },
);

export default userRouter; 
