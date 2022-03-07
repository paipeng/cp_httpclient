
class CPInitRequest {
    constructor(deviceType, udid, systemId) {
        this.deviceType = deviceType;
        this.udid = udid;
        this.systemId = systemId;
        this.camera1Feature = null;
        this.camera2Feature = null;
    }
}
module.exports = CPInitRequest


