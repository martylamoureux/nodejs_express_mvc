
exports.register = function(app) {
  require('./routes/index')
  .routes(app, '');
  
  require('./routes/articles')
  .routes(app, '/articles');
}
