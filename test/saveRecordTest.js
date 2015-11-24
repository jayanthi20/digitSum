var chai=require('chai')
var expect=chai.expect
var saveRecord=require('../saveRecord.js')
var dbConnect=require('../dbConnect.js')
var MongoClient=require('mongodb').MongoClient
var record

describe('Save Record file', function (done) {

it("should have function to save record to database", function (done) {
 	expect(typeof saveRecord == "function" ).to.equal(true)
 	done()
})

it("should save record to database", function (done) {
 	record={id:"test"}
 	dbConnect(function(err,db){
 	saveRecord(db,record,function(err,doc){
 		expect(doc).to.equal("Record saved successfully")
 		done()
 	})
 })
})

after(function(done){
	dbConnect(function(err,db){
		db.collection('digitSum').remove(record,function(err,results){
			db.close()
			done()
		})
	})
})

})