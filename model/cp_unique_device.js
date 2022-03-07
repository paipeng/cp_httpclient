
var CPDevice = require('./cp_device');
class CPUniqueDevice {
    constructor() {
        this.id;
        this.createTime;
        this.updateTime;
        this.udid;
        this.name;
        this.inspection = false;
        this.softwareId = 0;
        this.remark = null;
        this.device = new CPDevice();
        this.softwareName;
    }

}
module.exports = CPUniqueDevice;

