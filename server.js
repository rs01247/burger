const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const burgerCon = require('./controllers/burger_controller')

const app = express();
const PORT = process.env.PORT || 8080;

// ACCESS CSS AND IMAGES IN PUBLIC FOLDER
app.use(express.static(__dirname + '/public'));

// SET UP EXPRESS APP TO HANDLE BODY PARSING
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ACCESS TO BURGER.JS IN MODELS FOLDER
app.use(burgerCon);

app.listen(PORT, function () {
    //LOGGING WHEN SERVER HAS STARTED
    console.log(`Listening on ${PORT}`);
  });
  