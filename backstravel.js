const fortune = require('./libs/fortune');
const handlers = require('./libs/handlers');
const express = require('express');
const expressHandlebars = require('express-handlebars');    

const app = express();

app.use(express.static(__dirname + '/public'));

//configure handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => res.render('home'));
app.get('/', handlers.home);

app.get('/about', handlers.about);

//custom 404 page
app.use(handlers.notFound);

//custom 500 page
app.use(handlers.serverError);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    console.log(`Press Ctrl+C to terminate...`);
})