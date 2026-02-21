import Venda from '../models/vendaMensal.model.js';

export const create = (data, userId) => Venda.create({ ...data, user: userId });

export const findAll = (userId) =>
  Venda.find({ user: userId, deleted: false }).sort({ dataVenda: -1 });

export const findById = (id, userId) =>
  Venda.findOne({ _id: id, user: userId, deleted: false });

export const update = (id, data, userId) =>
  Venda.findOneAndUpdate(
    { _id: id, user: userId, deleted: false },
    { ...data, updatedBy: userId },
    { new: true, runValidators: true }
  );

export const remove = (id, userId) =>
  Venda.findOneAndUpdate(
    { _id: id, user: userId, deleted: false },
    { deleted: true, updatedBy: userId },
    { new: true }
  );
