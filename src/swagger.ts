import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import {Express} from "express";

export default function setupSwagger(app: Express) {
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

  const swaggerSpec = swaggerJSDoc(options);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}