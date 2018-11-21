'use strict';

var _cluster = require('cluster');

var _cluster2 = _interopRequireDefault(_cluster);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numCPUs = require('os').cpus().length;

// console.log(cluster.isMaster);
// if(cluster.isMaster){
// // Fork workers.
// //   for (let i = 0; i < numCPUs; i++) {
// //     cluster.fork();
// //   }
//     cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
//     // cluster.fork();
// }
// else{


var app = (0, _express2.default)();

function doWork(duration) {
    var start = Date.now();
    while (Date.now() - start < duration) {}
}

app.get('/', function (req, res) {
    //doWork(5000);

    _crypto2.default.pbkdf2('a', 'b', 100000, 512, 'sha512', function () {
        res.send('Hi There');
    });

    //res.send('hi there')
});

app.get('/fast', function (req, res) {
    console.log('This was fast.');
});

app.listen(3000);
//}