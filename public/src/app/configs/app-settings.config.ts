export const appConfig = {
    statusCode: {
        'success': 200,
        'no_content': 204,
        'unauthorized': 401,
        'internal_server_error': 500,
        'Invalid or subscriptionGuid': 400
    },

    pattern: {
        'NAME': '^[a-zA-Z,\\s_@."/$*~`!%^()=,\\\\"\-\'[^\\]{}#&+<>:;|?£-]*$',
        'PRIMARYNUMBER': '^((\\+91-?)|0)?[0-9]{10}$',
        'EXTENSION': '^^[ 0-9_@./$*~`!%^()=,#&+<>£:;\\\\"\-\'[^\\]{\\1}|?-]*$',
        'ZIPCODE': '^[ a-z0-9A-Z\\[\\]\/\\\\?=.*!@#$%^&*()+=~`_{}|:;,<>"\-\'-]+$',
        'EMAIL': /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/,
        'PASSWORD': /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/,
        'NUMBER': '^[0-9]*$',
        'EXPIRYDATE': /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
    }
}
