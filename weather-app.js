const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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