const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Movies API",
    version: "1.0.0",
    description: "REST API for Movies and Actors with Google OAuth"
  },
  servers: [
    {
      url: "https://cse341-project2-ylbv.onrender.com",
      description: "Render Production Server"
    }
  ],
  components: {
    securitySchemes: {
      GoogleOAuth: {
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://cse341-project2-ylbv.onrender.com/auth/google",
            tokenUrl: "https://cse341-project2-ylbv.onrender.com/auth/google/callback",
            scopes: {}
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"]
};

module.exports = swaggerJSDoc(options);