require('dotenv').config();

const express  = require('express');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const connectDB = require('./config/database');
connectDB();

const authRoutes = require('./routes/auth');
const User = require('./models/user')

const app = express()
const PORT = process.env.PORT || 3000;

const sessionConfig = {
    secret : process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}

app.use(express.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', authRoutes);

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;
  res.status(statusCode).json({ error: message });
});

app.listen(PORT, ()=> console.log(`App is listening on PORT ${PORT}`))