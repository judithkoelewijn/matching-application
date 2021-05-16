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
res.render('about-succes', {data: req.body});
});




app.get('/', (req, res) => {
    res.render('index');
});

app.get('/match-1', (req, res) => {
    res.render('match-1');
})

app.get('/match-2', (req, res) => {
    res.render('match-2');
})
app.get('/match-3', (req, res) => {
    res.render('match-3')
})
app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/match-succes', (req, res) => {
    res.render('match-succes');
})


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



 app.listen(process.env.PORT || 2910);

app.use(express.static('public'));
app.use(express.static('public/images'));



