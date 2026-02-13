import VendaMensal from '../models/vendaMensal.model.js';
import { AppError } from '../utils/AppError.js';

export const criarVenda = async (data) => {
  return await VendaMensal.create(data);
};

export const listarVendas = async () => {
  return await VendaMensal.find().sort({ ano: -1, mes: -1 });
};

export const buscarVendaPorId = async (id) => {
  const venda = await VendaMensal.findById(id);

  if (!venda) {
    throw new AppError('Venda não encontrada', 404);
  }

  return venda;
};

export const atualizarVenda = async (id, data) => {
  const vendaAtualizada = await VendaMensal.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!vendaAtualizada) {
    throw new AppError('Venda não encontrada', 404);
  }

  return vendaAtualizada;
};

export const deletarVenda = async (id) => {
  const venda = await VendaMensal.findByIdAndDelete(id);

  if (!venda) {
    throw new AppError('Venda não encontrada', 404);
  }

  return venda;
};
