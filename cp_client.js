const https = require('https');
var CPInitResponse = require('./model/cp_init_response');
var CPNanogridDecoder = require('./model/cp_nanogriddecoder');
var CPInitRequest = require('./model/cp_init_request');
class CPClient {
    constructor(serverUrl, webServiceToken, packageName) {
        this.serverUrl = serverUrl;
        this.webServiceToken = webServiceToken;
        this.packageName = packageName;
        this.options = {
            hostname: this.serverUrl,
            port: 443,
            method: 'POST',
            headers: {
                'Authorization': this.webServiceToken + ':' + this.packageName,
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': 0
            }
        };
    }

    /**
     * 
     * @param {CPInitRequest} initParam 
     * @param {*} success 
     * @param {*} fail 
     */
    init(initParam, success, fail) {
        const data = JSON.stringify(initParam)
        this.options.path = '/api/svc/clientinit';
        this.options.headers['Content-Length'] = data.length;

        //console.log(options);


        const request = https.request(this.options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                //console.log(data);
                //console.log(JSON.parse(data));
                let object = JSON.parse(data);
                var ret = Object.assign(CPInitResponse.prototype, object);
                success(ret);
            });
        })

        request.on('error', error => {
            console.error(error)
            fail(err);
        })

        request.write(data)
        request.end()
    }

    /**
     * 
     * @param {CPNanogridDecoder} nanogridDecoder 
     * @param {*} success 
     * @param {*} fail 
     */
    decode(nanogridDecoder, success, fail) {
        https.get('https://' + this.serverUrl, (resp) => {
            console.log(`statusCode: ${resp.statusCode}`)
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log('end');
                //console.log(JSON.parse(data).explanation);
                success(JSON.parse(data).explanation);
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
            fail(err);
        });
    }
}


module.exports = CPClient;

