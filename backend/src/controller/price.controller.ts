import { Request, Response } from 'express';
import { cron } from '../imports';
import { fetchAndUpdatePrices } from '../services/cron.service';
import { findAllPrices } from '../repository/price.repository';


const findAll = async (req: Request, res: Response) => {
    try {
        const data = await findAllPrices();
        res.status(200).send(data);
        console.log(data)
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

const insertAndUpdate = async (req: Request, res: Response) => {
    cron.schedule('*/5 * * * * *', fetchAndUpdatePrices);
    console.log('Cron job scheduled to fetch and update prices every hour and immediately ran the first update');
}
export { findAll, insertAndUpdate }
