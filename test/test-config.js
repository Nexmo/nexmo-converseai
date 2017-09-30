require('dotenv').config();

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_APP_ID = process.env.NEXMO_APP_ID;
const NEXMO_PRIVATE_KEY = process.env.NEXMO_PRIVATE_KEY;

const NEXMO_FROM_NUMBER = process.env.NEXMO_FROM_NUMBER;
const NEXMO_TO_NUMBER = process.env.NEXMO_TO_NUMBER;

const config = {
  registrationData: {
    api_key: NEXMO_API_KEY,
    api_secret: NEXMO_API_SECRET,
    application_id: NEXMO_APP_ID,
    application_private_key: NEXMO_PRIVATE_KEY,
    _nexmoTestOptions: {
      debug: true
    }
  },
  to_number: NEXMO_TO_NUMBER,
  from_number: NEXMO_FROM_NUMBER
}

module.exports = config;