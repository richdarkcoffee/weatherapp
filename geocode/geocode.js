const request = require('request');
const googleapi = require('../googleapi');

function geocodeAddress(address) {
    var useraddress = encodeURIComponent(address);
    var apikey = googleapi.googleapikey();

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apikey}&address=${useraddress}`, 
        json: true
    }, (error, response, body) => {
        if (error) {
            // Catching errors message in connecting to services
            console.log('Unable to connect to servers.');
        } else if (body.status === "ZERO_RESULTS") {
            // Catching errors messages from Google
            console.log('Unable to find this address.');
        } else if (body.status === "OK") {
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);    
        }
    })    
}

module.exports.geocodeAddress = geocodeAddress;