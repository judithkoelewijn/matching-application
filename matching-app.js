import express, {
    request,
    Router
} from 'express';
import expbs from 'express-handlebars';
var app = express();
import mongoose from 'mongoose';
import User from "./models/users.js";



app.engine('handlebars', expbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// connect to MongoDB via Mongo instructies//
const dbURI = 'mongodb+srv://newuser:test1234@clustertech.5tlhg.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(3000), console.log('connected'))
    .catch((err) => console.log('error'));




//localhost verbinding of verbinding via Heroku //
app.listen(process.env.PORT);

app.use(express.urlencoded({
    extended: true
}));




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





// pagina met matchende gebruikers//
// async function om match te vinden en naar /results te sturen (uitgewerkt met Marvin) //



app.get('/results', async (req, res) => {
    const allUsers = await User.find({});
    const lastUser = await User.findOne().sort({
        _id: -1
    });
    const matches = await User.find({
        location: lastUser.location
    })
    console.log(matches);
    res.render('results', {
        users: matches

    })


})


app.get('/profile', async (req, res) => {
    const lastUser = await User.findOne().sort({
        _id: -1
    });
    console.log(lastUser);
    res.render('profile', {
        laatsteGebruiker: lastUser

    })
})


/* new findone and update test */






app.post('/profile-changed', async (req, res) => {
    const lastUser = await User.findOne().sort({
        _id: -1
    });
    const updateUser = await User.findOneAndUpdate({
        name: lastUser.name
    }, {
        location: 'Rotterdam'
    }, {
        new: true
    }
    );
    res.render('profile-changed', {
        updatedUser: updateUser
        

    })
    
    
    
})


const lastUser = await User.findOne().sort({
    _id: -1
});



User.findOneAndUpdate({name: lastUser.name}, {location: 'Rotterdam'}, { new: true},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

    console.log('consoletest"',doc);
});










const updateUser = await User.findOneAndUpdate({
    name: lastUser.name
}, {
    location: 'Rotterdam'
}, {
    new: true
}
);




/* results when location has changed */

app.post('/updated-matches', async (req, res) => {
    const sendUser = await User.find({
        location: updateUser.location
    })
    res.render('updated-matches', {
        nieuweMatches: sendUser
    })
});










//profile changed location//
/*
const lastUser = await User.findOne().sort({
    _id: -1
});


//Werkende code om 1 paramater te wijzigen en user succesvol te updaten//
// Het updaten van de locatie van een gebruiker //
//https://stackoverflow.com/questions/7267102/how-do-i-update-upsert-a-document-in-mongoose//




const updateUser = await User.findOneAndUpdate({
    name: lastUser.name
}, {
    location: 'Rotterdam'
}, {
    new: true
}
);


/* creating a post method route */



app.get('/', (req, res) => {
    res.render('index');
});


app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/profile', (req, res) => {
    res.render('profile')
});

app.get('/profile-changed', (req,res) => {
    res.render('profile-changed')
});

app.get('/updated-matches', (req, res) => {
    res.render('updated-matches')
})





app.use(express.static('public'));
app.use(express.static('public/images'));