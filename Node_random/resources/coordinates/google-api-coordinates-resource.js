'use strict';

const request = require('request');

const _apiPath = 'https://maps.googleapis.com/maps/api/geocode';
const _resultFormat = 'json';
const _apiKey = 'AIzaSyC8W0Qrvdx7N1yfZwAW8GzPro2aWMoyewA';

/**
 * @param {Function} callback - executable callback that receives location object as parameter
 */
module.exports = function (callback) {
// @todo: make it random (city)
// @todo: make new key for google API
    const addr = 'Kyiv';
    const requestURI = `${_apiPath}/${_resultFormat}?address=${addr}&key=${_apiKey}`;

    request({
        url: requestURI,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var location = body//['results']//[1]['geometry']['location'];
            callback(location);
        }
    })
};

