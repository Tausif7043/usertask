module.exports = function(app) {
    app.use('/api', require('./get.js'));
}