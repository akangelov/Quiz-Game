const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/question', router.question);

};