const config = require('./Server/config/config');
const dbConnection = require('./Server/config/database');
const path=require("path");
const express = require('express');

const app = require('express')();

dbConnection().then(() => {

    require('./Server/config/express')(app);

    require('./Server/config/routes')(app);

    app.use(express.static('Client/build'));
    
    app.get('/*', function (req, res) {
       res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'));
     });
    
    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);