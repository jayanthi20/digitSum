var chai=require('chai')
var expect=chai.expect
var dbConnect=require('../dbConnect.js')

describe('Database file', function (done) {

it("should have function to connect to database", function (done) {
 	expect(typeof dbConnect == "function" ).to.equal(true)
 	done()
})

it("should be able to open database", function (done) {
  dbConnect(function(err,db){
  	expect(db).to.not.equal(null)
  	db.close()
  	done()
  }) 
})

it("should not have error in connection",function(done){
	dbConnect(function(err,db){
	expect(err).to.equal(null)
	db.close()
	done()
	})
})

})