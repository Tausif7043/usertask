/**
 * Express configuration
 */

'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const _ = require('lodash');
const path = require('path');

const jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
const urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' })

module.exports = function (app) {

    app.use(cors());
    app.use(morgan(':method :url :response-time'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' }));
    app.use(jsonParser);
    app.use(bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' }));
    app.use(urlencodedParser);
    app.use(methodOverride());
    app.use('/public', express.static('public'));
    app.use(express.static(path.join(__dirname, './public'))); 
};
