const express = require('express');
const router = express.Router();
import authClass from '../api/auth';
router
    .post('/register', function(req, res) {
        return authClass.register(req, res)
    })
    .post('/login', function(req, res) {
        return authClass.login(req, res)
    })

module.exports = router;