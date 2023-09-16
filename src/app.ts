import express, { Application, Request, Response } from 'express';
import { homeRoute } from './routes/homeRoute';
const app: Application = express();

const PORT: number = 3001;

app.use('/', homeRoute);

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
