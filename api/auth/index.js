import response from '../../components/response.js';
import service from './service';
import { hashIterations, hashLength } from '../../components/constants';
const { Validator } = require('node-input-validator');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const sms = require('../../components/sms.js') ;

class AuthClass {
    constructor() {
        this.registerValidations = {
            firstname: "required|minLength:2",
            lastname: "required|minLength:2",
            username: 'required|minLength:4',
            email: 'required|email',
            password: 'required',
            mobileNo: 'required|digits:10',
            image: 'size:4kb',
            userType: 'required'
        }

        this.loginValidations = {
            username: 'minLength:4',
            password: 'required',
            email: 'required|email'
        }
    }

    /**
	*@register
    * its a function for new registeration of the user 
    * @param | req | object | it is express request object
    * @param | res | object | it is express response object
	**/
    register(req, res) {
        // return sms.generateOTP(otp).then(() => {
        //     let responseUser = {
        //         "user": {
        //             "_id": "user",
        //             "username": "user",
        //             "email": "user",
        //             "token": "token"
        //         }
        //     }
        //     return response(res, responseUser, "Success", 200);
        // }).catch((err) => {
        //     return response(res, { message: 'User registered however OTP sending failed' }, "Error", 422);
        // })

        
        const validate = new Validator(req.body.user, this.registerValidations);
        let entity = req.body.user;
        validate.check().then((matched) => {
            if (!matched) {
                return response(res, validate.errors, "Error", 422);
            }
            return service.CheckUserExist(entity.username, entity.email, entity.mobileNo)
        }).then((exist) => {
            if (exist) {
                return response(res, { message: 'User Exist' }, "Error", 422);
            } else {
                entity.salt = crypto.randomBytes(16).toString('hex');
                entity.password = crypto.pbkdf2Sync(entity.password, entity.salt, hashIterations, hashLength, `sha512`).toString(`hex`);
                entity.image = entity.image || null;
                entity.createdAt = new Date();
                entity.otp = Math.floor(1000 + Math.random() * 9000);
                let token = this.generateJWT(entity);

                service.registerUser(entity).then(function (user) {
                    if (!user) {
                        return response(res, null, "Failed", 500);
                    } 
                    sms.generateOTP(entity.otp).then(() => {
                        let responseUser = {
                            "user": {
                                "_id": user._id,
                                "username": user.username,
                                "email": user.email,
                                "token": token
                            }
                        }
                        return response(res, responseUser, "Success", 200);
                    }).catch((err) => {
                        return response(res, { message: 'User registered however OTP sending failed' }, "Error", 422);
                    })

                });
            }
        });
    }

    /**
	*@login
    * its a function to check the login credentials of the user 
    * @param | req | object | it is express request object
    * @param | res | object | it is express response object
	**/
    login(req, res) { 
        const validate = new Validator(req.body.user, this.loginValidations);
        let entity = req.body.user;
        validate.check().then((matched) => {
            if (!matched) {
                return response(res, validate.errors, "Error", 422);
            }
            return service.CheckUserExist(entity.username, entity.email)
        }).then((exist) => {
            if (!exist)
                return response(res, { message: 'Email or password is invalid!' }, "Error", 422);
            return service.CheckUserVerified(entity.username, entity.email)
        }).then((verified) => {
            if (!verified) {
                return response(res, { message: 'User is not verified' }, "Error", 422);
            } else {
                let token = this.generateJWT(verified);
                const passHash = crypto.pbkdf2Sync(password, verified.salt, hashIterations, hashLength, `sha512`).toString(`hex`);
                if (user.password === passHash) {
                    let responseUser = {
                        "user": {
                            "_id": verified._id,
                            "username": verified.username,
                            "email": verified.email,
                            "token": token
                        }
                    }
                    return response(res, responseUser, "Success", 200);
                } else {
                    return response(res, { message: 'Password is incorrect. Please try again' }, "Error", 422);
                }
            }
        })
    }

    /**
	*@generateJWT
    * its a function to generate the JWT token for newly registered user 
    * @param | user | object | it is new created user object
	**/
    generateJWT(user) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        let token = jwt.sign({
            id: user.email,
            username: user.username,
            exp: Math.floor(exp.getTime() / 1000)
        }, process.env.JWT_SECRET);
        return token
    }

};

module.exports = new AuthClass();