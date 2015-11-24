var digitSum = function(number,cb)
{
	if(isNaN(number)){
		cb("Invalid Input",null)
	}
	if(number%1!=0) {
		cb('Invalid Input',null);
	}
	else
	{
		var str=number.toString();
		var sum = 0;
		for (var i = 0; i < str.length; i++) {
		    sum += parseInt(str.charAt(i));
		 }
		 cb(null,sum)
	}
}

module.exports=digitSum