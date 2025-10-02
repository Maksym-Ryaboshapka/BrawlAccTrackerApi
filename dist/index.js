"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_1 = __importDefault(require("./swagger"));
const player_router_1 = __importDefault(require("./routes/player.router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
(0, swagger_1.default)(app);
app.get("/", ((_req, res) => {
    res.send("Hello from server!");
}));
app.use("/player", player_router_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
