"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotenv = exports.Router = exports.bodyParser = exports.express = void 0;
const express_1 = __importDefault(require("express"));
exports.express = express_1.default;
const body_parser_1 = __importDefault(require("body-parser"));
exports.bodyParser = body_parser_1.default;
const express_2 = require("express");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_2.Router; } });
const dotenv_1 = __importDefault(require("dotenv"));
exports.dotenv = dotenv_1.default;
