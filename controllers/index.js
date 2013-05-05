//var Test = require('../models/user');

exports.index = function(req, res){
	res.render('index.jade', {
		title: 'Express'
	});
};

/*
exports.index = function(req, res){
	res.render('index.jade', {
		title: 'Express'
	});
};
*/