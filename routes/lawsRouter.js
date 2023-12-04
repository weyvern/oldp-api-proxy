import { Router } from 'express';
import { getLawById, getBookById } from '../controllers/laws.js';

const lawsRouter = Router();

lawsRouter.get('/law/:id', getLawById);
lawsRouter.get('/book/:id', getBookById);

export default lawsRouter;
