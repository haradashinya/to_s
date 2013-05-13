String.prototype.to_s = function(data){
	var str = this.toString();

	var convert = function(s){
		return data[s];
	};

	while(/#{(\w+)}/.test(str)){

		var matchStr =RegExp.$1;
		var str = str.replace(/#{(\w+)}/,convert(matchStr));

	}
	return str;
};


module.exports = String.prototype.to_s;







