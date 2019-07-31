exports.removeDuplicateElementsVersion1 = (arrays) => {
	return arrays.reduce(function(a,b){
		if (a.indexOf(b) < 0 ) a.push(b)
		return a
	},[])
};

exports.removeDuplicateElementsVersion2 = (arrays) => {

};