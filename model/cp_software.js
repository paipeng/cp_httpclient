var CPNanogridDpi = require('./cp_nanogrid_dpi');
var CPSoftwareVersion = require('./cp_software_version');
var CPShootingMode = require('./cp_shooting_mode');
const CPSoftwareShootingMode = require('./cp_software_shooting_mode');
class CPSoftware {
    constructor() {
        this.id = 61;
        this.createTime = 1546607019000;
        this.updateTime = 1628733544000;
        this.apiKey = '';
        this.name = '';
        this.packageName = '';
        this.systemId = 3;
        this.androidKeystoreDebugSha1 = null;
        this.androidKeystoreReleaseSha1 = null;
        this.category = '';
        this.language = '';
        this.url = null;
        this.website = '';
        this.webserviceUrl = '';
        this.supportDeviceUrl = null;
        this.feedbackUrl = null;
        this.dashboardUrl = null;
        this.nanogridBanClientId = '';
        this.nanogridOnlyClientId = '';
        this.qrcodeBlacklist = null;
        this.qrcodeWhitelist = null;
        this.summary = '';
        this.valid = true;
        this.forceUpdate = false;
        this.autoInsertNewVersion = false;
        this.expireDate = null;
        this.decodeCountLimit = null;
        this.maxDecodeErrorNum = 2;
        this.login = false;
        this.scanSettings = true;
        this.handleResult = true;
        this.ignoreErrorResult = false;
        this.levelBar = true;
        this.flash = true;
        this.multiLanguage = false;
        this.updateBadge = false;
        this.gps = true;
        this.gpsIntervalTime = 0;
        this.forceUploadOfValidGps = false;
        this.forceLogin = false;
        this.checkFocusDistance = false;
        this.deviceNames = '';
        this.screenshots = null;
        this.icon = null;
        this.detectRotation = 0;
        this.uploadThumbNail = false;
        this.offsetY = 0;
        this.compress = false;
        this.jpegCompress = 100;
        this.imageFormat = 0;
        this.improveHistogram = false;
        this.checkQrcode = false;
        this.inspection = false;
        this.continueDecoding = false;
        this.pro = false;
        this.skipCamera = false;
        this.invertImage = false;
        this.mobilephoneLogin = false;
        this.autoZoom = false;
        this.parallelDecoding = false;
        this.nanogridWithinQrcode = false;
        this.detectShape = true;
        this.detect = true;
        this.opencvDetectMseq = true;
        this.colorChannel = 0;
        this.imageColor = 0;
        this.hideYellowScore = false;
        this.wechatUnionid = null;
        this.registered = false;
        this.tts = false;
        this.lowPercentUploadEnable = true;
        this.validateSizeRatio = true;
        this.forceTip = false;
        this.forceUpload = false;
        this.detectRotate = true;
        this.detectBlock = false;
        this.checkExposureValue = false;
        this.reflectionAdjustment = 0;
        this.minSquareRatio = 0.8;
        this.maxSquareRatio = 1.4;
        this.keepStableImage = 0;
        this.blockIpRequestTooMany = 0;
        this.doublePixel = false;
        this.beStrict = false;
        this.description = '';
        this.userId = null;
        this.nanogridDpi = new CPNanogridDpi();

        this.softwareVersions = new Array(new CPSoftwareVersion());
        this.softwareShootingMode = new Array(new CPSoftwareShootingMode());
        this.shootingModes = new Array(new CPShootingMode());
        this.softwareInspectionLocations = null
    }

}
module.exports = CPSoftware;
