// connect to MongoDB via Mongo instructies//
import express, {
    request,
    Router
} from 'express';
import expbs from 'express-handlebars';
var app = express();
import mongoose from 'mongoose';
import User from "./models/users.js";



const dbURI = 'mongodb+srv://newuser:test1234@clustertech.5tlhg.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result = mongooseConnection) => app.listen(3000), console.log('connected'))
    .catch((err) => console.log('error')); ;




//localhost verbinding of verbinding via Heroku //
app.listen(process.env.PORT);

app.use(express.urlencoded({
    extended: true
}));


export default mongooseConnection;