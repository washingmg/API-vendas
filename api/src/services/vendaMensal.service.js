import * as repo from '../repository/vendaMensal.repository.js';
import { AppError } from '../utils/AppError.js';

export const criarVenda = (data, userId) => repo.create(data, userId);

export const listarVendas = (userId) => repo.findAll(userId);

export const buscarVenda = async (id, userId) => {
  const venda = await repo.findById(id, userId);
  if (!venda) throw new AppError('Venda não encontrada', 404);
  return venda;
};

export const atualizarVenda = async (id, data, userId) => {
  const venda = await repo.update(id, data, userId);
  if (!venda) throw new AppError('Venda não encontrada', 404);
  return venda;
};

export const deletarVenda = async (id, userId) => {
  const venda = await repo.remove(id, userId);
  if (!venda) throw new AppError('Venda não encontrada', 404);
};
