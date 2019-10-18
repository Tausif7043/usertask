

const accountSid = process.env.SMS_Account_SID;
const authToken = process.env.SMS_Auth_Token;
const fromPhoneNo = process.env.PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

class SMSClass { 
    /**
	*@generateOTP
    * its a function to call the API to generate the OTP to verify user details 
    * @param | otp | Number | it is 4 digit OTP value 
	**/
    generateOTP(otp) { 
        console.log('otp', otp)
        return new Promise((resolve, reject) => {
            client.messages
                .create({
                    body: 'Dear Customer, Your OTP for Truck Booqing is ' + otp + '. Please use this OTP to verify your account.',
                    from: fromPhoneNo, 
                    to: '+918087102744'
                })
                .then(message => resolve(message.sid))
                .catch((err) => {
                    console.log('err', err)
                    reject(err)
                });

        })
    }
};

module.exports = new SMSClass();