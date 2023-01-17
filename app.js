const express = require('express');
const {create} = require('express-handlebars');
const path = require('path');
const app = express();



app.set('views', path.join(__dirname, "views"));

app.engine(
    ".hbs",
    create({
      extname: ".hbs",
    }).engine
  ); 

app.set('view engine', 'hbs');

//STATIC FILES
app.use( express.static(path.join(__dirname, "/public")));

//routes
app.use(require('./routes/google.routes'));

module.exports = app;