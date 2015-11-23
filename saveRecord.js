var dbConnect=require('./dbConnect.js')
var MongoClient=require('mongodb').MongoClient

var saveRecord=function(record,cb){
dbConnect(function(err,db){
	db.collection('digitSum').insert(record,function(err,doc){
		if(err){
			cb(err,null)
		}
		else{
			cb(null,"Record saved successfully")
		}
	})
})
}

module.exports=saveRecord