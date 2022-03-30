import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = 'fake_secret';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Token not found' });

  try {
    const decoded = jwt.verify(token, SECRET) as JwtPayload;

    req.body.tokenData = decoded.data;
    return next();
  } catch (err: unknown) {
    if (err instanceof Error && err.name.includes('Token')) {
      return res.status(401).json({ error: 'Invalid Token' });
    }
    return next(err);
  }
};