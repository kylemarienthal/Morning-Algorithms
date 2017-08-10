function concat(arr1, arr2){

    var new_arr = arr1
    for(var i=0; i<arr2.length; i++){
        new_arr[new_arr.length]=arr2[i]
    }
    return new_arr
}


arr1=[1,2,3,4,5,6,7,8,9,0]
arr2=[0,9,8,7,6,5,4,3,2,1]
var result = concat(arr1, arr2)
console.log(result)
