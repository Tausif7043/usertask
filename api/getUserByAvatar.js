const response = require('../components/response.js');
const _= require('underscore');
const axios = require('axios');
const fs = require('fs');

module.exports = function(req, res) {   
 
    axios.get('https://reqres.in/api/users/' + req.params.userid)
    .then(function (responseData) {
        if(responseData === null || responseData === {}) return response(res, responseData, "Data Not found", 400);
        let fileName = require('path').resolve(__dirname) + '/avatar/' + req.params.userid + '.png';
        if (fs.existsSync(fileName)) {
            var bitmap = fs.readFileSync(fileName);
            // convert binary data to base64 encoded string
            let base64Data = Buffer(bitmap).toString('base64');
            let resData = {imageRep : base64Data}
             return response(res, resData, "logged in", 200);
        } else {
            axios.get(responseData.data.data.avatar, {
                responseType: 'arraybuffer'
            }).then(function (avatarResponse) {
                let base64Data = new Buffer(avatarResponse.data, 'binary').toString('base64');
                fs.writeFile(fileName, base64Data, 'base64', function(err) {
                    if(err) console.log(err); 
                    let resData = {imageRep : base64Data}
                    return response(res, resData, "logged in", 200);
                });

            });
        }
    })
    .catch(function (error) {
        console.log(error);
        return response(res, error, "Error", 400);
    });
};