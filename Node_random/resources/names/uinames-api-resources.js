'use strict';

const request = require('request');


//http://uinames.com/api/?amount=1&gender=male&region=ukraine
const _apiPath = 'http://uinames.com/api/?ext';

/**
 * @param {Function} callback - executable callback that receives location object as parameter
 */
module.exports = function (callback) {
    // @todo: make it random gender and regions

    const requestURI = `${_apiPath}`;

    request({
        url: requestURI,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body);
        }
    })
};

