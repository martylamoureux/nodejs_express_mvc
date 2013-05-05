var controller = require('../controllers/index');

exports.routes = function(app, root) {

	app.get(root+'/', controller.index);

};

/*
exports.index = function(req, res){
	res.render('index.jade', {
		title: 'Express'
	});
};
*/