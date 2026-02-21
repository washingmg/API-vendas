import jwt from 'jsonwebtoken';
import User from '../models/userVendedor.model.js';
import { AppError } from '../utils/AppError.js';

export default async function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    console.log('HEADERS:', req.headers);
    if (!authHeader) throw new AppError('Token não enviado', 401);

    const parts = authHeader.split(' ');
    if (parts.length !== 2) throw new AppError('Token mal formatado', 401);

    const [scheme, token] = parts;

    console.log('TOKEN RECEBIDO:', token);
    if (!/^Bearer$/i.test(scheme))
      throw new AppError('Token deve ser Bearer', 401);

    console.log('VERIFY SECRET:', process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['HS256'],
    });

    const user = await User.findById(decoded.id).select('_id username');
    if (!user) throw new AppError('Usuário não existe mais', 401);

    // 🔴 PADRONIZAÇÃO CRÍTICA
    req.user = {
      _id: user._id.toString(),
      username: user.username,
    };
    console.log('ID DO TOKEN:', user.id);
    console.log('ID REAL:', user._id.toString());
    return next();
  } catch (err) {
    if (err.name === 'TokenExpiredError')
      return next(new AppError('Token expirado', 401));

    if (err.name === 'JsonWebTokenError')
      return next(new AppError('Token inválido', 401));

    return next(err);
  }
}
