'use strict';
var model = require('../../models');
var User = model.users;
class AuthService {
    /**
	*@CheckUserExist
    * its a function fetch user's data by its username or email or phone number
    * @param | username | String | it should be username
    * @param | email | String | it should be email
    * @param | phoneNumber | Number | it should be phone number
	**/
    CheckUserExist(username, email, mobileNo) {
        return User.findOne({ $or: [{ email: email }, { username: username }, { mobileNo: mobileNo }], deleted: false }).exec();
    }

    /**
	*@registerUser
    * its a function fetch user's data by its username or email or phone number
    * @param | user | Object | User object 
	**/
    registerUser(user) {
        return User.create(user);
    }

    /**
	*@CheckUserVerified
    * its a function to verify if user's details by checking the isVerified flag value is true or false 
    * @param | user | Object | User object 
	**/
    CheckUserVerified(username, email) {
        return User.findOne({ $or: [{ email: email }, { username: username }], isVerified: true }).exec();
    }
}
module.exports = new AuthService();
