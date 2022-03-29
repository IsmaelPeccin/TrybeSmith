import jwt from 'jsonwebtoken';
import { ITokenData } from '../interfaces';

const jwtConfig = { expiresIn: '1d' };

const SECRET = 'fake_secret';

export default (data: ITokenData) => jwt.sign({ data }, SECRET, jwtConfig);