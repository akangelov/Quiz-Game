const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        // dbURL: 'mongodb+srv://angel123:angel123@cluster0.gwqda.mongodb.net/myproject?retryWrites=true&w=majority',
        dbURL: 'mongodb://localhost:27017/rest-api-db',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];