import { Router } from 'express';
import * as vendaController from '../controllers/vendaMensal.controller.js';
import {
  validateVenda,
  validateVendaUpdate,
} from '../middlewares/validateVenda.middleware.js';
import auth from '../middlewares/auth.middleware.js';

const router = Router();
router.use(auth);

router.post('/', validateVenda, vendaController.criarVenda);
router.get('/', vendaController.listarVendas);
router.put('/:id', validateVendaUpdate, vendaController.atualizarVenda);
router.delete('/:id', vendaController.deletarVenda);

export default router;
