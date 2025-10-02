"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupSwagger;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
function setupSwagger(app) {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "BrawlAccTrackerApi",
                version: "1.0.0",
            },
        },
        apis: ["./src/routes/*.ts"],
    };
    const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
}
