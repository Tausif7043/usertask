const CronJob = require('cron').CronJob;
const axios = require('axios');
const fs = require('fs');
let page = 1;
const job = new CronJob('0 */1 * * * *', function() {
    let fileName = require('path').resolve(__dirname) + '/text.txt';
    const stats = fs.statSync(fileName);
    const fileSizeInBytes = stats.size;
    axios.get('https://reqres.in/api/users?page=' + page++)
    .then(function (responseData) {
        if(fileSizeInBytes === 0) {
            fs.writeFile(fileName, JSON.stringify(responseData.data, undefined, 4), function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            }); 
        } else {
            fs.appendFile(fileName, JSON.stringify(responseData.data, undefined, 4), function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
        }
    })
  });
  job.start();