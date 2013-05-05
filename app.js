
/**
 * Start 
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , jade = require('jade')
  , stylus = require('stylus')
  , nib = require('nib')
  , mongoose = require('mongoose')

  , urls = require('./urls')
  ;

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
));

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

mongoose.connect('mongodb://localhost/test', function(err) {
  if (err) { throw err; }
});

urls.register(app);

app.use(function(err, req, res, next){
      // treat as 404
      if (~err.message.indexOf('not found')) return next()

      // log it
      console.error(err.stack)

      // error page
      res.status(500).render('500', { error: err.stack })
    })

    // assume 404 since no middleware responded
    app.use(function(req, res, next){
      res.status(404).render('404', { url: req.originalUrl, error: 'Not found' })
    })


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
