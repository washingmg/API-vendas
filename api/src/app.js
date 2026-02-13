import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import vendaRoutes from './routes/vendaMensal.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { notFound } from './middlewares/notFound.middleware.js';

const app = express();

app.use(express.json());

app.use(helmet());
app.use(cors());

app.use('/vendas', vendaRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
