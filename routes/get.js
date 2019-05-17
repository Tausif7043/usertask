const express = require('express');
const router = express.Router(); 
const expressJwt = require('express-jwt'); 
router
.get('/user/:userid', require('../api/getUser'))
.get('/user/:userid/avatar', require('../api/getUserByAvatar'))
.delete('/user/:userid', require('../api/deleteFile'))

module.exports = router;