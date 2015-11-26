var MongoClient = require('mongodb').MongoClient

var dbConnect = function(cb){
	MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
			return cb(err,db)
	})
}

module.exports = dbConnect