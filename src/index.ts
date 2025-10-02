import express from "express";
import setupSwagger from "./swagger";
import RouteHandler from "./types/route.type";

import playerRouter from "./routes/player.router"

const app = express();
const PORT = process.env.PORT || 3000;
setupSwagger(app);

app.get("/", ((_req, res) => {
  res.send("Hello from server!");
}) as RouteHandler);

app.use("/player", playerRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});