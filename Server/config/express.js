const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import cors from 'cors';
const secret = 'secret';
const path = require('path');

module.exports = (app) => {
//   app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
//   }));

  app.use(cors());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  app.use(cookieParser(secret));
};