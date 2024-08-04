"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.API_KEY = void 0;
const imports_1 = require("../imports");
imports_1.dotenv.config();
const { API_KEY, PORT } = process.env;
exports.API_KEY = API_KEY;
exports.PORT = PORT;
