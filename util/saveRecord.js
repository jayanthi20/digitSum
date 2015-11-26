var dbConnect=require('./dbConnect.js')
var MongoClient=require('mongodb').MongoClient

var saveRecord=function(db,record,cb){
	db.collection('digitSum').insert(record,function(err,doc){
		if (err){
			return cb(err,null)
		} else {
			return cb(null,"Record saved successfully")
		}
	})
}

module.exports=saveRecord