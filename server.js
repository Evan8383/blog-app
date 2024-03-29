// require('dotenv').config()
const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes')

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = 3001;

// session options
app.use(session({
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  maxAge: 60 * 60 * 1000,
  store: new SequelizeStore({
    db: sequelize,
  })
}));

// setup and use handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// server options
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(routes)

// starting the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT)
});