
var CPClient = require('./cp_client');
var CPDetect = require('./cp_detect');
var CPResult = require('./cp_result');

var CPInitRequest = require('./model/cp_init_request');
var CPInitResponse = require('./model/cp_init_response');
var CPNanogridDecoder = require('./model/cp_nanogriddecoder');
var httpClient = new CPClient(serverUrl, webServiceToken, packageName);

// test init
var initRequest = new CPInitRequest(deviceType, udid, systemId);


function readImage() {

}

/**
 * 
 * @param {CPInitResponse} initResponse 
 */
function doDecode(initResponse) {
    const nanogridDecoder = new CPNanogridDecoder();
    nanogridDecoder.shootingMode = initResponse.software.shootingModes[0];
    nanogridDecoder.uniqueDevice = initResponse.uniqueDevice;
    nanogridDecoder.softwareVersion = initResponse.software.softwareVersions[0];
    console.log(nanogridDecoder);

    httpClient.decode(nanogridDecoder, function (result) {
        console.log(result);
    }, function (error) {
        console.error(error);
    });
}


httpClient.init(
    initRequest,
    /**
     * 
     * @param {CPInitResponse} result 
     */
    function (result) {
        console.log(result.software.softwareShootingMode);
        console.log(result.software.shootingModes);

        doDecode(result);
    },

    function (error) {

    }
);


