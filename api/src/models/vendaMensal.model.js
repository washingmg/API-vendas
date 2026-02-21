import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },

    valor: {
      type: Number,
      required: [true, 'Valor obrigatório'],
      min: [0, 'Valor inválido'],
    },

    descricao: String,

    dataVenda: {
      type: Date,
      required: [true, 'Data obrigatória'],
      index: true,
    },

    deleted: {
      type: Boolean,
      default: false,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    version: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

schema.pre('findOneAndUpdate', function () {
  this.set({ $inc: { version: 1 } });
});

export default mongoose.model('Venda', schema);
