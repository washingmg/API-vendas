import { AppError } from '../utils/AppError.js';

export const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Erro interno do servidor';

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === 'CastError') {
    statusCode = 400;
    message = 'ID inválido';
  } else if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join(', ');
  } else if (err.code === 11000) {
    statusCode = 409;
    message = 'Já existe registro para esse mês e ano';
  } else {
    console.error('Erro não tratado:', err);
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};
