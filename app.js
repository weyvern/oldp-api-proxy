import express from 'express';
import lawsRouter from './routes/lawsRouter.js';

const port = 5050;
const app = express();

app.use('/old', lawsRouter);

app.listen(port);
