const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Mailing address to get weather at',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);
var useraddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${googleapikey}&address=${useraddress}`, 
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