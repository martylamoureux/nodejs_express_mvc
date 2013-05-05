var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var test = new Schema({
	date : { type: Date, default: Date.now },
	text: String
});

mongoose.model('test', test);