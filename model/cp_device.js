var CPDeviceConfig = require('./cp_device_config');


class CPDevice {
    constructor() {
        this.id = 2968;
        this.createTime = 1626765130000;
        this.updateTime = 1626767066000;
        this.name = 'h5_mobile_android';
        this.type = 'h5_mobile_android';
        this.systemId = 2;
        this.deviceState = 0;
        this.supportFocusLength = false;
        this.invertImageFormat = false;
        this.timeToMarket = null;
        this.camera1MaxPreviewWidth = 0;
        this.camera1MaxPreviewHeight = 0;
        this.camera2MaxPreviewWidth = 0;
        this.camera2MaxPreviewHeight = 0;
        this.camera1MaxZoom = 0;
        this.camera2MaxZoom = 0;
        this.screenWidth = 0;
        this.screenHeight = 0;
        this.cameraNumber = 0;
        this.hardwareLevel = 0;
        this.camera1Feature = null;
        this.camera2Feature = null;
        this.description = null;
        this.deviceConfig = new CPDeviceConfig();
    }

}
module.exports = CPDevice;
