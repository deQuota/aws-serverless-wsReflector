'use strict';
var msg = "null";
var request = require("request");
var url = "https://opensky-network.org/api/states/all";
module.exports.hello = (event, context, callback) => {





    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            // console.log(body) // Print the json response
            msg = body;
        }
         msg = body;
    })

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: msg,
           // input: event,
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}
;





