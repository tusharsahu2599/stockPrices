
import { Price } from '../models/price.schema';

const findAllPrices = async () => {
    return await Price.find();
}
const insertAndUpdate = async (data: any) => {
    const { symbol, name, price } = data;
    const filter = { symbol, name };
    const update = { $push: { price } };
    const options = { upsert: true, new: true };
    return await Price.findOneAndUpdate(filter, update, options);
}
export {
    findAllPrices,
    insertAndUpdate
}

