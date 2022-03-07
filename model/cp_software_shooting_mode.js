var CPShootingMode = require('./cp_shooting_mode');

class CPSoftwareShootingMode {
    constructor() {
        this.id = 0;
        this.createTime = 0;
        this.updateTime = 0;
        this.shootingMode = new CPShootingMode();
        this.companyName = '';
        this.companyNameValue = ''
    }

}
module.exports = CPSoftwareShootingMode;