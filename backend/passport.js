const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

passport.serializeUser(function(user, done) {
    
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    
        done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      done(null,profile)
  }
));

//GITHUB
passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  //facebook

//   passport.use(
//     new FacebookStrategy(
//       {
//         clientID: "",
//         clientSecret: "",
//         callbackURL: "http://localhost:5000/auth/facebook/callback",
//       },
//       function (accessToken, refreshToken, profile, done) {
//         done(null, profile);
//       }
//     )
//   );

 