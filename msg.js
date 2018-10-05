var config = require('./config');
var twilio = require('twilio');
var client = new twilio(config.accountSid, config.authToken);

client.messages.create({
    body: 'Your Twilio code is 1238432',
    to: config.to,
    from: config.from
})
.then((message) => console.log(message.sid));
