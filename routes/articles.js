var controller = require('../controllers/articles');

exports.routes = function(app, root) {

	app.get(root+'/', controller.list);

};

/*
exports.index = function(req, res){
	res.render('index.jade', {
		title: 'Express'
	});
};
*/