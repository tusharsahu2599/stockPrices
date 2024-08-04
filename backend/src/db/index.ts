import { DB_HOST, DB_NAME, DB_PORT } from "../config";
import { dotenv, mongoose } from "../imports";

dotenv.config({ path: '.env.dev' });

const dbHost = DB_HOST;
const dbPort = DB_PORT;
const dbName = DB_NAME;

const mongoUri = `mongodb://${dbHost}:${dbPort}/${dbName}`;

const connection = mongoose.connect(mongoUri).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

export default connection;
