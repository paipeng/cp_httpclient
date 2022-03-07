
var CPUniqueDevice = require('./cp_unique_device');
var CPShootingMode = require('./cp_shooting_mode');
var CPSoftwareVersion = require('./cp_software_version');

class CPNanogridDecoder {
    constructor() {
        this.id;
        this.createTime;
        this.updateTime;
        this.focusLength = 1.0;
        this.longitude = 0;
        this.latitude = 0;
        this.country = '';
        this.province = '';
        this.city = '';
        this.district = '';
        this.address = '';
        this.base64String = null;
        this.uniqueDevice = new CPUniqueDevice();
        this.shootingMode = new CPShootingMode();
        this.softwareVersion = new CPSoftwareVersion();
        this.detectCodeType = 0;
    }

}
module.exports = CPNanogridDecoder;

