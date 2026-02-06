import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import VendaMensal from './VendaMensal.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  

// Middleware

app.use(express.json());

// Conexão com o MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("---> Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar o MongoDB:", error);
  }
};


connectDB();

app.post('/vendas', async (req, res) => {
  try {
    const novaVendaMensal = await VendaMensal.create(req.body);
    
    return res.status(201).json({
      success: true,
      data: novaVendaMensal,
      message: 'Venda criada com sucesso'
    });
  } catch (error) {
    console.error('Erro ao criar venda:', error);
    
    return res.status(400).json({
      success: false,
      message: 'Erro ao criar venda',
      error: error.message
    });
  }
});

// READ - Buscar todas as vendas
app.get('/vendas', async (req, res) => {
  try {
    const vendasMensais = await VendaMensal.find(); 
    res.json({
      success: true,
      data: vendasMensais,
      message: "vendas buscadas com sucesso"
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Erro ao buscar vendas',
      error: error.message
    }); 
  }});


// UPDATE - Atualizar uma venda por ID
app.put('/vendas/:id', async (req, res) => {
  try {
    const novaVendasMensais = await VendaMensal.findByIdAndUpdate(
      req.params.id, 
      req.body, { new: true }); 
    res.json({
      success: true,
      data: novaVendasMensais,
      message: "venda atualizada com sucesso"
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Erro ao buscar vendas',
      error: error.message
    }); 
  }
});

app.delete('/vendas/:id', async (req, res) => {
  try {
    const vendaMensalDeletada = await VendaMensal.findByIdAndDelete(
      req.params.id);

    res.json({
      success: true,
      data: vendaMensalDeletada,
      message: "venda deletada com sucesso"
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Erro ao deletar venda',
      error: error.message
    }); 
  }
});

app.listen(PORT, () => {
    console.log(`\nCRUD "Horas Estudadas" rodando na porta: ${PORT}`);
    console.log(`---> http://${process.env.NODE_APP_HOST}:${PORT}`);
});
