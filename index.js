require('dotenv').config();

const express  = require('express');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const connectDB = require('./config/database');
connectDB();

const authRoutes = require('./routes/auth');
const mainRoutes = require('./routes/main');

const User = require('./models/user');

const app = express()
const PORT = process.env.PORT || 3000;

const sessionConfig = {
    secret : process.env.SECRET,
    resave: false,
    saveUninitialized: false,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', authRoutes);
app.use('/', mainRoutes);

app.get('/', (req, res)=>{
  res.status(200).json({msg : 'The Home Route'})
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const { statusCode = 500, message = "Internal Server Error" } = err;
  res.status(statusCode).json({ error: message });
});

app.listen(PORT, ()=> console.log(`App is listening on PORT ${PORT}`));