const Nexmo = require('nexmo');

function builder(registrationData) {
    // Options may be passed in during test runs
    // Note: these will be JSON deserialized parameters
    const nexmoOptions = registrationData._nexmoTestOptions || null;

    console.log(registrationData);

    const nexmo = new Nexmo({
      apiKey: registrationData.api_key,
      apiSecret: registrationData.api_secret
    }, {debug: true});

    return nexmo;
}

module.exports = {
  build: builder
};