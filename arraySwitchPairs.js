// Array: Swap Pairs

function switchPairs(arr){
	for (var i = 0, i < arr.length-1, i += 2){
		var temp = arr[i]
		arr[i] = arr[i+1]
		arr[i+1] = temp
	}
	return array;
}
console.log(switchPairs([1,2,3,4,5,6,7]));
