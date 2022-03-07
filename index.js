
var CPClient = require('./cp_client');
var CPDetect = require('./cp_detect');
var CPResult = require('./cp_result');

var CPInitRequest = require('./model/cp_init_request');
var CPInitResponse = require('./model/cp_init_response');
var httpClient = new CPClient(serverUrl, webServiceToken, packageName);

// test init
var initRequest = new CPInitRequest(deviceType, udid, systemId);


httpClient.init(
    initRequest,
    /**
     * 
     * @param {CPInitResponse} result 
     */
    function (result) {
        console.log(result.software.softwareShootingMode);
        console.log(result.software.shootingModes);

    },

    function (error) {

    }
);

/*

const detect = new CPDetect(10, 10);
console.log(detect);

httpClient.decode(detect, function (result) {
    console.log(result);
}, function (error) {
    console.error(error);
});
*/