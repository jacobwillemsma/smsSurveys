var constantsList = require("./constants.js");
var twilio = require("twilio")(constantsList.constants.AccountSID, constantsList.constants.AuthToken);
 
twilio.messages.create({
    body: "Jenny please?! I love you <3",
    to: constantsList.constants.MyPhoneNumber,
    from: constantsList.constants.TwilioPhoneNumber
}, function(err, message) {
    process.stdout.write(message.sid);
});