import express, { request, Router } from 'express';
import expbs from 'express-handlebars';
var app = express();
import mongoose from 'mongoose';
import User from "./models/users.js";





// connect to MongoDB //
const dbURI = 'mongodb+srv://newuser:test1234@clustertech.5tlhg.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000), console.log('connected'))
.catch((err) => console.log('error'));

import bodyParser2 from 'body-parser';
import bodyParser from 'body-parser';
import { name } from 'ejs';


app.listen(process.env.PORT);

app.use(express.urlencoded({ extended: true }));


//Mongoose Routes testing //

app.get('/add-user', (req, res) => {
 const user = new User({
     name: 'New User',
     location: 'Amsterdam West',
     interests: 'Voetbal'
 });
 user.save()
 .then((result) => {
     res.send(result)
 })
 .catch((err) => {
     console.log(err);
 });
})

app.get('/all-users', (req, res) => {
    User.find({location:'Amsterdam'})
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});






app.get('/single-user', (req, res) => {
    User.findById('60a52b6d4e74872a6e304ade')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
});



//post handler hier wordt gebruiker aangemaakt en toegevoegd aan database op basis van data uit formulier//





app.post('/results', (req, res) => {
    const user = new User(req.body);
    
    user.save() 
    .then((result) => {
        res.redirect('results');
    })
    .catch((err) => {
        console.log(err);
    })
    

})





//find matching paramater//
//https://thecodebarbarian.com/how-find-works-in-mongoose.html//

User.findOne().sort({ _id:-1 }).exec((err, docs)  => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("The latest added new user:",docs);
        return;
    }
});


const allUsers = 





app.get('/results', (req, res) => {
    User.find({location: 'Amsterdam'})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
});









//updaten van een gebruiker//








//displaying matching users//


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




 




//routes and 404//


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

app.get('/results', (req, res) => {
    res.render('results');
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

/* App naar poort laten luisteren */

 

app.use(express.static('public'));
app.use(express.static('public/images'));



