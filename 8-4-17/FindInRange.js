function findRange(arr, min, max){
    var count = 0

    for(var i=0; i<arr.length; i++){
        if(arr[i] >= min && arr[i] <= max){
            arr[count] = arr[i]
            count ++
        }

    }
    arr.length = count
    return arr
}


arr = [1,2,3,4,5,6,7,8,9,0]
min = 3
max = 6
var result = findRange(arr, min, max)
console.log(result)
