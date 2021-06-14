// connect to MongoDB via Mongo instructies//
const dbURI = 'mongodb+srv://newuser:test1234@clustertech.5tlhg.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(3000), console.log('connected'))
    .catch((err) => console.log('error'));