
var CPUniqueDevice = require('./cp_unique_device');

class CPInitResponse {
    constructor() {
        this.uniqueDevice = new CPUniqueDevice();

    }

}
module.exports = CPInitResponse;


