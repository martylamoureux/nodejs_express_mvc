var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: String,
	date : { type: Date, default: Date.now },
	contenu: String
});

exports.model = mongoose.model('article', articleSchema);