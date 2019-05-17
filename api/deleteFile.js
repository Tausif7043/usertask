const response = require('../components/response.js');
const _= require('underscore'); 
const fs = require('fs');

module.exports = function(req, res) { 
    let fileName = require('path').resolve(__dirname) + '/avatar/' + req.params.userid + '.png';
    if (!fs.existsSync(fileName)) {
        return response(res, {msg: "File not present"}, "File Deleted Successfully", 404);
    } else {
        fs.unlink(fileName, function(err) {
            if(err) console.log(err); 
            return response(res, {msg: "File Deleted Successfully"}, "File Deleted Successfully", 200);
        })
    }
};