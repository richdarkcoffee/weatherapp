const request = require('request');
const googleapi = require('../googleapi');

function darkskyWeatherAPI(lat, long, callback) {
    var apikey = googleapi.darkskyapikey();

    request({
        url: `https://api.darksky.net/forecast/${apikey}/${lat},${long}`, 
        json: true
    }, (error, response, body) => {
        if (error) {
            // Catching errors message in connecting to services
            callback('Unable to connect to servers.', undefined);
        } else if (body.status === "ZERO_RESULTS") {
            // Catching errors messages from Google
            callback('Unable to find this address.', undefined);
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                windspeed: body.currently.windSpeed,
                windchill: body.currently.apparentTemperature
            });
        }
    });
}

module.exports.darkskyWeatherAPI = darkskyWeatherAPI;