var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page = require('../models/pages.js');

var adminUser = require('../models/admin-users.js');

/* User Rroutes. */

router.get('/', function(req, res) {
	res.send('Welcometp API zone');
});

router.get('/pages', function(request, response) {
	
	return Page.find(function(err, pages) {
		if (!err) {
			return response.send(pages);
		} else {
			return response.send(500, err);
		}
	});
});
