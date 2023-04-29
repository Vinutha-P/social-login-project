const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "919561810594-7j5sklsdqqhpurs0jhiuu3d9ti77kuja.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "919561810594-7j5sklsdqqhpurs0jhiuu3d9ti77kuja.apps.googleusercontent.com";
GITHUB_CLIENT_SECRET = "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";

FACEBOOK_APP_ID = "919561810594-7j5sklsdqqhpurs0jhiuu3d9ti77kuja.apps.googleusercontent.com";
FACEBOOK_APP_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
