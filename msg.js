var accountSid = 'AC68e7a38ef26935a0befb587758f993b9'; // Your Account SID from www.twilio.com/console
var authToken = '2214eaaffb8dbe1d4e94e29801e61c32';   // Your Auth Token from www.twilio.com/console

var config = require('./config');
var twilio = require('twilio');
var client = new twilio(config.accountSid, config.authToken);

client.messages.create({
    body: 'Your Twilio code is 1238432',
    to: config.to,
    from: config.from
})
.then((message) => console.log(message.sid));
