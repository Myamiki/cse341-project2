const express = require("express");
require("dotenv").config();

const session = require("express-session");
const passport = require("passport");

const connectDB = require("./data/database");
const routes = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// Passport configuration
require("./config/passport");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", routes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Movies API!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});