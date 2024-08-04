import { bodyParser, cors, express } from "./imports";
import { PORT } from "./config";
import { routes } from "./routes";
import connection from "./db"

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(cors({
    origin: '*',
}));
app.listen(PORT, async () => {
    await connection;
    console.log(`Server started on port ${PORT}`)
})
