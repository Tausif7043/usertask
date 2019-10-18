// var fs = require("fs");
// var path = require("path");
// var mongoose = require('mongoose');

// class MongoConnection {
//     constructor() {
//         this.options = {
//             user: 'tbooq',
//             pass: ''
//         }
//         this.db = {};
//     }

//     connectionString() {
//         let connect = mongoose.connect(process.env.DB_URI, {
//             useNewUrlParser: true
//         });
//         let basename = path.basename(module.filename);
//         //READING ALL THE FILES IN THE MODEL FOLDER
//         this.readModelsFile(basename, this.db)
//         this.db = { Mongoose: mongoose, Connect: connect };
        
//     }

//     readModelsFile(basename, db) {
//         return fs
//             .readdirSync(__dirname)
//             .filter(function (file) {
//                 return (file.indexOf(".") !== 0) && (file !== basename);
//             })
//             .forEach(function (file) {
//                 db[file.replace(/\.[^/.]+$/, "")] = require(path.join(__dirname, file));
//             });
//     }
// }

// const dbConnect = new MongoConnection();
// let dbStats = dbConnect.connectionString()
// console.log('dbStats', dbConnect.db)
// module.exports = dbStats;

var fs = require("fs");
var path = require("path");
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

var connect = mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true
});
var basename = path.basename(module.filename);
var db = {};
//READING ALL THE FILES IN THE MODEL FOLDER
fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== basename);
    })
    .forEach(function (file) {
        db[file.replace(/\.[^/.]+$/, "")] = require(path.join(__dirname, file));
    });

db.Mongoose = mongoose;
db.Connect = connect;
 
module.exports = db;

