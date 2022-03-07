
var CPClient = require('./cp_client');
var CPDetect = require('./cp_detect');
var CPResult = require('./cp_result');

var CPInitRequest = require('./model/cp_init_request');
var CPInitResponse = require('./model/cp_init_response');
var httpClient = new CPClient(serverUrl, webServiceToken, packageName);
httpClient.init(initRequest, function (result) {
    //console.log(result);
}, function (error) {

});
const detect = new CPDetect(10, 10);
console.log(detect);

var httpClient = new CPClient('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');

httpClient.decode(0, function (response) {
    console.log(response);
}, function (error) {
    console.error(error);
});