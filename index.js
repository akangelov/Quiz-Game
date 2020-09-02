const config = require('./config/config');
const dbConnection = require('./config/database');

const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        // res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });

    if(process.env.NODE_ENV === 'production') {
        app.use(express.static('Client/build'));
  
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))
        })
    }

    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);