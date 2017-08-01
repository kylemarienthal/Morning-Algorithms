//create a function that takes in an array and an 
//element to be added to the front of the array

function arrayPushFront(arr, element){
    for(var i = arr.length; i > 0; i--){
        arr[i] = arr[i - 1]
    }
    arr[0] = element;
    return arr;
}

console.log(arrayPushFront([1,2,3,4,5], 0));
