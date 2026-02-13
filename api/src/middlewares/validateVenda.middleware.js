import { AppError } from '../utils/AppError.js';

export const validateVenda = (req, res, next) => {
  const { mes, ano, valorVendido } = req.body;

  if (mes === undefined || ano === undefined || valorVendido === undefined) {
    return next(
      new AppError('Campos obrigatórios: mes, ano, valorVendido', 400)
    );
  }

  if (!Number.isInteger(mes) || mes < 1 || mes > 12) {
    return next(new AppError('Mês inválido', 400));
  }

  if (!Number.isInteger(ano) || ano < 1900) {
    return next(new AppError('Ano inválido', 400));
  }

  if (typeof valorVendido !== 'number' || valorVendido < 0) {
    return next(new AppError('Valor inválido', 400));
  }

  next();
};

export const validateVendaUpdate = (req, res, next) => {
  const { mes, ano, valorVendido } = req.body;

  if (mes !== undefined) {
    if (!Number.isInteger(mes) || mes < 1 || mes > 12) {
      return next(new AppError('Mês inválido', 400));
    }
  }

  if (ano !== undefined) {
    if (!Number.isInteger(ano) || ano < 1900) {
      return next(new AppError('Ano inválido', 400));
    }
  }

  if (valorVendido !== undefined) {
    if (typeof valorVendido !== 'number' || valorVendido < 0) {
      return next(new AppError('Valor inválido', 400));
    }
  }

  next();
};
