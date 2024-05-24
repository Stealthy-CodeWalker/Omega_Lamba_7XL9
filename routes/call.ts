import {Twilio} from 'twilio';
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid,authToken);

export const call = async () => {
  client.calls
    .create({
      url: process.env.TWILIO_VOICE,
      to: '+917047431067',
      from: process.env.TWILIO_NUMBER,
    })
    .then(
        (call) => {console.log(call.sid);return call}
    );
};