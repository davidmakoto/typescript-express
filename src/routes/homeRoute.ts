import { Router } from 'express';

export const homeRoute: Router = Router();

homeRoute.get('/', (req, res) => {
    res.send('in the home folder!');
});
