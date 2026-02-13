import mongoose from 'mongoose';

const vendaMensalSchema = new mongoose.Schema(
  {
    mes: {
      type: Number,
      required: [true, 'O mês é obrigatório'],
      min: [1, 'O mês deve ser entre 1 e 12'],
      max: [12, 'O mês deve ser entre 1 e 12'],
      unique: true,
    },
    ano: {
      type: Number,
      required: [true, 'O ano é obrigatório'],
      min: [1900, 'Ano inválido'],
    },
    valorVendido: {
      type: Number,
      required: [true, 'O valor vendido é obrigatório'],
      min: [0, 'O valor não pode ser negativo'],
    },
  },
  {
    timestamps: true,
  }
);

vendaMensalSchema.index({ mes: 1, ano: 1 }, { unique: true });
export default mongoose.model('VendaMensal', vendaMensalSchema);
