
var CPClient = require('./cp_client');
var CPDetect = require('./cp_detect');
var CPResult = require('./cp_result');

const detect = new CPDetect(10, 10);
console.log(detect);

var httpClient = new CPClient('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');

httpClient.decode(0, function (response) {
    console.log(response);
}, function (error) {
    console.error(error);
});