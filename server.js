const config = require('./Server/config/config');
const dbConnection = require('./Server/config/database');
const path=require("path");
const express = require('express');

const app = require('express')();

dbConnection().then(() => {

    require('./Server/config/express')(app);

    require('./Server/config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        // res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });

    // if(process.env.NODE_ENV === 'production') {
    //     app.use(express.static('Client/build'));
  
    //     app.get('*', (req, res) => {
    //         res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))
    //     })
    // }

    if(process.env.NODE_ENV === 'production') {
        app.use(express.static('Client/build'));

            app.get('/about', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))
        })

        app.get('/*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))
        })
    }

    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);