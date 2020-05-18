const fortune = require('./libs/fortune');
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

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
    res.render('about', {
        fortune: fortune
    })
});

//custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
});

//custom 500 page
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500);
    res.render('500');
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    console.log(`Press Ctrl+C to terminate...`);
})