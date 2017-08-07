// Array: Swap Pairs

function switchPairs(arr){
	for (var i = 0, i < arr.length-1, i += 2){
		var temp = arr[i]
		arr[i] = arr[i+1]
		arr[i+1] = temp
	}
	return array;
}
