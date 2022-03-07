
var httpClient = require('./cp_client');



httpClient.cpClient.decode(0, function (response) {
    console.log(response);
}, function (error) {
    console.error(error);
});