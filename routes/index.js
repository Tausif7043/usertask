
const expressJwt = require('express-jwt'); 

module.exports = function(app) {
    app.use('/api/auth', require('./auth.js'));
}