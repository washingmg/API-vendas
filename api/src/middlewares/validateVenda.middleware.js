import mongoose from 'mongoose';
import { AppError } from '../utils/AppError.js';

export const validateVenda = (req, res, next) => {
  const { valor, descricao, dataVenda } = req.body;

  // usuário vem do token, não do body
  if (valor === undefined || !dataVenda) {
    return next(new AppError('Campos obrigatórios: valor e dataVenda', 400));
  }

  // valor
  if (typeof valor !== 'number' || valor < 0) {
    return next(new AppError('O valor deve ser um número positivo', 400));
  }

  // data
  const date = new Date(dataVenda);
  if (isNaN(date.getTime())) {
    return next(new AppError('Data de venda inválida', 400));
  }

  next();
};

export const validateVendaUpdate = (req, res, next) => {
  const { valor, descricao, dataVenda } = req.body;

  if (valor !== undefined) {
    if (typeof valor !== 'number' || valor < 0) {
      return next(new AppError('O valor deve ser um número positivo', 400));
    }
  }

  if (dataVenda !== undefined) {
    const date = new Date(dataVenda);
    if (isNaN(date.getTime())) {
      return next(new AppError('Data de venda inválida', 400));
    }
  }

  next();
};
