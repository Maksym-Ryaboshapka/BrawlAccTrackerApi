import express from "express";
import RouteType from "./types/routeType";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", ((_req, res) => {
  res.send("Hello from server!");
}) as RouteType);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});