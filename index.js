
var httpClient = require('./cp_client');

var CPDetect = require('./cp_detect');
var CPResult = require('./cp_result');

const detect = new CPDetect(10, 10);
console.log(detect);

httpClient.cpClient.decode(0, function (response) {
    console.log(response);
}, function (error) {
    console.error(error);
});