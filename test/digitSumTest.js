var chai = require('chai')
var expect = chai.expect
var digitSum = require('../util/digitSum.js')
var number

describe('Digit Sum file', function (done) {


it('should have function to calculate sum of digits', function (done) {
 	expect(typeof digitSum === 'function' ).to.equal(true)
 	done()
})

it('should return sum of the digits of given number',function(done){
	number = 1234
	digitSum(number,function(err,sum){
	expect(sum == 10).to.equal(true)
	done()
	})
})

it('should return as invalid input if the input is non numeric',function(done){
	number = 'j#a'
	digitSum(number,function(err,sum){
	expect(err =='Invalid Input').to.equal(true)
	done()
	})
})

it('should return as invalid input if the input is floating point',function(done){
	number = '1234.53433'
	digitSum(number,function(err,sum){
	expect(err =='Invalid Input').to.equal(true)
	done()
	})
})

})