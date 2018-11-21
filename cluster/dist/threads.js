'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _webworkerThreads = require('webworker-threads');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    var worker = new _webworkerThreads.Worker(function () {
        this.onmessage = function () {
            var counter = 0;
            while (counter < 1e9) {
                counter++;
            }
            postMessage(counter);
        };
    });

    worker.onmessage = function (myCounter) {
        console.log(myCounter);
    };

    worker.postMessage();
});

//app.listen(3000);