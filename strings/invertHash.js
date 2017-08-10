function invertHash(obj){
	var temp;
	for (key in obj){
		temp = obj[key];
		obj[key] = key;
		key = temp;
	}
	return obj;
}
