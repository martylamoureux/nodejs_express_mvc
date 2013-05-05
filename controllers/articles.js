var viewsRoot = 'articles/';
var Article = require('../models/article').model;

exports.list = function(req, res){

	Article.find(null, function(err, items) {
		if (err) { throw err; }
		
		res.render(viewsRoot + 'index.jade', {
			title: 'Articles',
			articles: items
		});
		
	});

	
};

/*
exports.index = function(req, res){
	res.render('index.jade', {
		title: 'Express'
	});
};
*/