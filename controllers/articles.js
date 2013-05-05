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

exports.add = function(req, res) {
	
	var object = new Article();
	
	res.render(viewsRoot + 'form.jade', {
		title: 'Nouvel Article',
		article: object
	});

};

exports.create = function(req, res) {
	
	var object = new Article(req.body);
	
	object.save(function(err) {
		res.redirect('/articles/');
	});

};