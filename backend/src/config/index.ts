import { dotenv } from "../imports";
dotenv.config({ path: '.env.dev' });
const { API_KEY, PORT, DB_HOST, DB_PORT, DB_NAME, CURRENCY_API_URL } = process.env;
export {
    API_KEY,
    PORT,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    CURRENCY_API_URL,
}