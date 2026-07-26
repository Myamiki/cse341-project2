const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

// Temporary debug
console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID);
console.log(
  "GITHUB_CLIENT_SECRET:",
  process.env.GITHUB_CLIENT_SECRET ? "Loaded" : "Missing"
);
console.log("================================");
console.log("CALLBACK_URL:", process.env.CALLBACK_URL);
console.log("================================");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});