"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BS_TOKEN = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
exports.BS_TOKEN = process.env.BS_TOKEN;
