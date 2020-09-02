const env = process.env.NODE_ENV || 'production';

const config = {
    development: {
        port: process.env.PORT || 4999,
        dbURL: 'mongodb+srv://angel123:angel123@cluster0.gwqda.mongodb.net/myproject?retryWrites=true&w=majority',
        // dbURL: 'mongodb://localhost:27017/rest-api-db',
        authCookieName: 'x-auth-token'
    },
    production: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb+srv://angel123:angel123@cluster0.gwqda.mongodb.net/myproject?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    }
};

module.exports = config[env];