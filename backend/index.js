const express = require("express");
const app = express();
const passport = require("passport");
const passportSetup = require("./passport")
const authRoute = require("./routes/auth")
const cors = require("cors")
const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2'],
    maxAge:24*60*60*100
  })) 
  
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors({
    origin:"http://localhost:3001",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
  }))
  app.use("/auth",authRoute)
app.listen(5000,()=>{
    console.log("server connection successfully!")
})