import { Request, Response, NextFunction } from 'express';

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (!classe) {
    return res.status(400).json({ error: 'Classe is required' });
  }
  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }
  if (classe.length <= 2) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }
  return next();
};

export default validateClasse;