

import express, { Router } from 'express';
import expbs from 'express-handlebars';
var app = express();

import bodyParser from 'body-parser';



app.engine('handlebars',expbs({
    defaultLayout: 'main',
  }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res ){
    res.render('index', {title: 'Welcome Judith'});


var urlencodedParser = bodyParser.urlencoded({ extended: false});


app.post('/about', urlencodedParser, function (req, res) {
console.log(req.body);
res.render('about', {qs: req.query});
});





app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Test about title' , name: 'Judith Koelewijn'});
})



app.use(function(req,res, next) {

    res.status(404).send("404: Sorry, the page you're looking for does not exist");
    
    });

app.get('/home', (req, res) => {
    res.render('home');
}) }


)

app.listen(2910, () => {

    console.log('Server is at point 2910');
    
    });