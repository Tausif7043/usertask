const response = require('../components/response.js');
const _= require('underscore');
const axios = require('axios');
module.exports = function(req, res) {   
    axios.get('https://reqres.in/api/users/' + req.params.userid)
    .then(function (responseData) {
        console.log('response.data', responseData.data)
        return response(res, responseData.data, "logged in", 200);
    })
    .catch(function (error) {
        console.log(error);
        return response(res, error, "Error", 400);
    });
};