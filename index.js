var dbConnect = require('./util/dbConnect.js')
var digitSum = require('./util/digitSum.js')
var saveRecord = require('./util/saveRecord.js')

var number = '1235'
dbConnect(function(err,db){
	if (err){
		console.log(err)
	} else {
		digitSum(number,function(err,sum){
			if (err){
				console.log(err)
			} else {
			saveRecord(db,{number:number,digitSum:sum,time:new Date().getTime()},
				function(err,str){
					if (err){
						console.log(err)
					} else {
						console.log('sum:',sum)
						console.log(str)
					}
			})
			}
		})
	}
})