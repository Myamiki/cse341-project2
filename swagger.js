const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Movies API",
    version: "1.0.0",
    description: "REST API for Movies and Actors"
  },
  servers: [
    {
      url: "http://localhost:3000"
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;