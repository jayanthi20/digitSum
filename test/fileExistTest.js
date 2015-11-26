var chai = require('chai')
var expect = chai.expect
var fs = require('fs')
var path = require('path') 

describe('Project folder', function (done) {

it('should have db connection file', function (done) {
  fs.lstat(path.join(__dirname, '../util/dbConnect.js'),function(err,obj){
  	expect(obj).to.not.equal(undefined)
  	done()
  })  
})

it('should have digit Sum file', function (done) {
  fs.lstat(path.join(__dirname, '../util/digitSum.js'),function(err,obj){
  	expect(obj).to.not.equal(undefined)
  	done()
	})
})

it('should have save record to database file', function (done) {
  fs.lstat(path.join(__dirname, '../util/saveRecord.js'),function(err,obj){
  	expect(obj).to.not.equal(undefined)
  	done()
  })  
})

})