var dbConnect=require('./dbConnect.js')
var digitSum=require('./digitSum.js')
var saveRecord=require('./saveRecord.js')

var number="12"
dbConnect(function(err,db){
	if(err)
	{
		console.log(err)
	}
	else{
		digitSum(number,function(err,sum){
			if(err)
			{
				console.log(err)
			}
			else{
			saveRecord({number:number,digitSum:sum,time:new Date().getTime()},function(err,str){
				if(err)
				{
					console.log(err)
				}
				else
				{
					console.log("sum:",sum)
					console.log(str)
				}
			})
			}
		})
	}
})