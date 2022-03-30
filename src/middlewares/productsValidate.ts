import { Request, Response, NextFunction } from 'express';
import productValidate from '../schemas/productValidate';

const createValidate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productValidate.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code as unknown as number).json({ message });
  }
  return next();
};

export default createValidate;