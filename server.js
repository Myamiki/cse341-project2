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
app.set("trust proxy", 1);

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
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
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

// Temporary debug route
app.get("/profile", (req, res) => {
  res.json({
    authenticated: req.isAuthenticated(),
    user: req.user || null,
    session: req.session,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});