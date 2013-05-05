var controller = require('../controllers/articles');

exports.routes = function(app, root) {

	app.get(root+'/', 			controller.list);
	app.get(root+'/add/',		controller.add);
	
	app.post(root+'/add/',		controller.create);

};