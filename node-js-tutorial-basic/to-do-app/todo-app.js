const express = require('express');
const app = express();
const toDoController = require('./controllers/to-do-controller.js');

// setup template engine
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

// setupt serving of static files
app.use('/assets',express.static('assets'));

app.listen(3000);
// fire cotnrollers with passing thisexpressframework
toDoController(app);
