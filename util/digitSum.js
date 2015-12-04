var digitSum = function(number,cb){
	if ( isNaN(number) || number % 1 != 0){
		return cb('Invalid Input',null)
	} else {
		var str = number.toString().split("")
		//var sum = str.reduce((prev, curr) => parseInt(prev) + parseInt(curr))
		var sum = 0;
		for (var i = 0; i < str.length; i++) {
		    sum += parseInt(str.charAt(i));
	 }
		 return cb(null,sum)
	}
}

module.exports = digitSum