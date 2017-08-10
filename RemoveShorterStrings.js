//take in an array and a number as arguments
//return the array with only the words that
// are equal to or longer than the number
//ex: arr =['my', 'dog', 'is', 'awesome']
// n = 3
// ==> ['dog','awesome']

function shrStr(arr, num){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].length >= num){
            arr[count] = arr[i];
            count ++;
        }
    }
    arr.length = count;
    return arr;
}

arr = ['my', 'dog', 'is', 'awesome'];
num = 3;
console.log('kyle')