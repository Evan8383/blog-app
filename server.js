require('dotenv').config()
const express = require('express');
const sequelize = require('./config/connection');

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = 3001;

const exphbs = require('express-handlebars');

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

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT)
});