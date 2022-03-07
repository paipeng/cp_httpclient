const https = require('https');

function CpClient() {
    this.serverUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

}

CpClient.prototype.decode = function (detect, success, fail) {
    https.get(this.serverUrl, (resp) => {
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
        //fail(err);
    });
};


module.exports = {
    cpClient: new CpClient()
};
