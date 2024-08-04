"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imports_1 = require("./imports");
const config_1 = require("./config");
const app = (0, imports_1.express)();
app.use(imports_1.express.json());
app.use(imports_1.bodyParser.urlencoded({ extended: true }));
app.use(imports_1.bodyParser.json());
app.listen(config_1.PORT, () => {
    console.log(`Server started on port ${config_1.PORT}`);
});
