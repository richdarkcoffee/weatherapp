var getUser = (id, callbackFn) => {
    var user = {
        id: id,
        name: 'Georg'
    };
    
    setTimeout(() => { 
        callbackFn(user);
    }, 3000);
};

getUser(50, (user) => {
    console.log(user);
});

// Maps API query:
// https://https:/maps.googleapis.com/maps/apigeocode/json?key=value&keytwo=value2
