const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const darksky = require('./darksky/darksky');

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

// Added error handling by passing function to geocodeAddress
geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});

darksky.darkskyWeatherAPI(41.8089191, -88.01117459999999, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});
