const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Movies API",
    version: "1.0.0",
    description: "REST API for Movies and Actors with GitHub OAuth Authentication"
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local Development Server"
    },
    {
      url: "https://cse341-project2-ylbv.onrender.com",
      description: "Render Production Server"
    }
  ],
  components: {
    securitySchemes: {
      GitHubOAuth: {
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "http://localhost:3000/auth/github",
            tokenUrl: "http://localhost:3000/auth/github/callback",
            scopes: {}
          }
        }
      }
    }
  },
  security: [
    {
      GitHubOAuth: []
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"]
};

module.exports = swaggerJSDoc(options);