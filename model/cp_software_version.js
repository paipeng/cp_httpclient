class CPSoftwareVersion {
  constructor() {
    this.id = 0;
    this.createTime = 0;
    this.updateTime = 0;
    this.major = 0;
    this.minor = 0;
    this.revision = 0;
    this.versionCode = 1;
    this.version = '';
    this.size = null;
    this.url = '';
    this.s2icodeModuleVersion = '';
    this.sha256 = null;
    this.valid = false;
    this.state = 2;
    this.description = '';
    this.downloadCode = '';
    this.softwareName = ''
  }

}
module.exports = CPSoftwareVersion;
