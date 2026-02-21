import * as vendaService from '../services/vendaMensal.service.js';
import { successResponse } from '../utils/response.js';

export const criarVenda = async (req, res, next) => {
  try {
    const venda = await vendaService.criarVenda(req.body, req.user._id);
    return successResponse(res, 201, venda);
  } catch (error) {
    next(error);
  }
};

export const listarVendas = async (req, res, next) => {
  try {
    const vendas = await vendaService.listarVendas(req.user._id);
    return successResponse(res, 200, vendas);
  } catch (error) {
    next(error);
  }
};

export const atualizarVenda = async (req, res, next) => {
  try {
    const venda = await vendaService.atualizarVenda(
      req.params.id,
      req.body,
      req.user._id
    );
    return successResponse(res, 200, venda);
  } catch (error) {
    next(error);
  }
};

export const deletarVenda = async (req, res, next) => {
  try {
    await vendaService.deletarVenda(req.params.id, req.user._id);
    return successResponse(res, 200, { message: 'Venda removida' });
  } catch (error) {
    next(error);
  }
};
