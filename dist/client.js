"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brawl_api_wrapper_1 = require("brawl-api-wrapper");
const config_1 = require("./config");
const bsClient = new brawl_api_wrapper_1.Client(config_1.BS_TOKEN);
exports.default = bsClient;
