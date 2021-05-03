
import express from 'express';
import expbs from 'express-handlebars';
const app = express();




app.engine('handlebars',expbs({
    defaultLayout: 'main',
  }));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Test about me title' });
})

app.use(function(req,res, next) {

    res.status(404).send("404: Sorry, the page you're looking for does not exist");
    
    });

app.get('/home', (req, res) => {
    res.render('home');
})

app.listen(2910, () => {
    console.log('Server is at point 2910');
});

