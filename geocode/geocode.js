const request = require('request');
const googleapi = require('../googleapi');

function geocodeAddress(address, callback) {
    var useraddress = encodeURIComponent(address);
    var apikey = googleapi.googleapikey();

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apikey}&address=${useraddress}`, 
        json: true
    }, (error, response, body) => {
        if (error) {
            // Catching errors message in connecting to services
            callback('Unable to connect to servers.', undefined);
        } else if (body.status === "ZERO_RESULTS") {
            // Catching errors messages from Google
            callback('Unable to find this address.', undefined);
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;