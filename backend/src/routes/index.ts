import { insertAndUpdate, findAll } from '../controller/price.controller';
import { Router } from 'express';
export const routes = Router()
    .get('/start', async (req, res) => {
        try {
            await insertAndUpdate(req, res)
            res.send('Cron job started and prices updated.');
        } catch (error) {
            res.status(500).send('Error starting cron job and updating prices.');
        }
    })
    .get('/getPrices', async (req, res) => {
        try {

            console.log('Getting prices');
            await findAll(req, res);
        } catch (error) {
            res.status(500).send('Error fetching prices.');
        }
    });
