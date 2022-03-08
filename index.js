var bmp = require("./bmp/cp_bmp");

var CPClient = require('./cp_client');
var CPDetect = require('./cp_detect');
var CPResult = require('./cp_result');

var CPInitRequest = require('./model/cp_init_request');
var CPInitResponse = require('./model/cp_init_response');
var CPNanogridDecoder = require('./model/cp_nanogriddecoder');

var config = require('./config.json');

var httpClient = new CPClient(config.serverUrl, config.webServiceToken, config.packageName);


// test init
var initRequest = new CPInitRequest(config.deviceType, config.udid, config.systemId);


function readImageToBase64() {
    var mat = bmp.reader(imageFile);
    return bmp.writer(mat).base64();
}

/**
 * 
 * @param {CPInitResponse} initResponse 
 */
function doDecode(initResponse) {
    const nanogridDecoder = new CPNanogridDecoder();
    nanogridDecoder.shootingMode = { id: initResponse.software.shootingModes[0].id };
    nanogridDecoder.uniqueDevice = { udid: initResponse.uniqueDevice.udid };
    //nanogridDecoder.uniqueDevice.device.deviceConfig = null;
    delete nanogridDecoder.uniqueDevice.softwareName;
    nanogridDecoder.softwareVersion = { versionCode: initResponse.software.softwareVersions[0].versionCode };//initResponse.software.softwareVersions[0];
    console.log(nanogridDecoder);
    console.log(JSON.stringify(nanogridDecoder));

    nanogridDecoder.base64String = 'data:image/bmp;base64,' + readImageToBase64();

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


