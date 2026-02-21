import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userVendedor.model.js';
import { AppError } from '../utils/AppError.js';

export async function register({ username, password }) {
  const exists = await User.findOne({ username });
  if (exists) throw new AppError('Usuário já existe', 409);

  // model faz o hash automaticamente no pre('save')
  const user = await User.create({
    username,
    password,
  });

  return {
    id: user._id,
    username: user.username,
  };
}

export async function login({ username, password }) {
  // ⚠️ precisa do +password porque select:false
  const user = await User.findOne({ username }).select('+password');
  if (!user) throw new AppError('Credenciais inválidas', 401);

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new AppError('Credenciais inválidas', 401);

  const token = jwt.sign(
    { id: user._id.toString(), username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '8h', algorithm: 'HS256' }
  );

  return { token };
}
