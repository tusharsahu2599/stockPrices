import mongoose, { Schema, Document } from 'mongoose';

interface IPrice extends Document {
    name: string;
    symbol: string;
    price: object[];
    createdAt: Date;
    updatedAt: Date;
}
const PriceSchema: Schema = new Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    price: { type: Array },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Price = mongoose.model<IPrice>('Price', PriceSchema);

export { Price, IPrice };
