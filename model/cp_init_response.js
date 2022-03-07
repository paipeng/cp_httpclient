
var CPUniqueDevice = require('./cp_unique_device');
var CPSoftware = require('./cp_software');

class CPInitResponse {
    constructor() {
        this.uniqueDevice = new CPUniqueDevice();
        this.software = new CPSoftware();
    }

}
module.exports = CPInitResponse;


