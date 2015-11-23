var MongoClient=require('mongodb').MongoClient

var dbConnect=function(cb)
{
	MongoClient.connect("mongodb://0.0.0.0/test", function(err, db) {
			cb(err,db)
	})
}

module.exports=dbConnect