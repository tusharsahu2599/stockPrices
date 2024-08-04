
import { axios } from '../imports'
import { API_KEY, CURRENCY_API_URL } from '../config';
import { currencyAPI, currencyMiddleware } from '../helpers/constants';
import { insertAndUpdate } from '../repository/price.repository';


const fetchAndUpdatePrices = async () => {
    try {
        const request_data =
        {
            "currency": "USD",
            "codes": ["ETH", "BNB", "BTC", "TONCOIN", "DOGE"],
            "sort": "rank",
            "order": "ascending",
            "offset": 0,
            "limit": 0,
            "meta": true

        }
        const url: any = CURRENCY_API_URL + currencyMiddleware.COINS + currencyAPI.COINS_MAP;
        const headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }
        const response = await axios.post(url, request_data, { headers: headers })
        const prices: any = response.data;
        console.log('Response data', prices);
        const data: any = prices.map((el: any) => {
            return {
                symbol: el.symbol,
                name: el.name,
                price: {
                    price: el.rate,
                    createdAt: new Date().toISOString(),
                }
            }
        })
        for (const price of data) {
            console.log(price)
            await insertAndUpdate(price);
        }
        console.log('Prices updated successfully');
    } catch (error) {
        console.error('Error fetching and updating prices:', error);
    }
};
export {
    fetchAndUpdatePrices
}
