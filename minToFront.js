function minToFront(arr){
    var min = arr[0];
    var position;
    var temp;
    for (var i = 1;i < arr.length; i++){
        if(arr[i] < min){
            position = i;
            min = arr[i];
        }
    } 
    console.log(min)
    console.log(position)

    for(i = position; i > 0; i--){
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
    }
    console.log(arr)
    return arr
}
minToFront([1,2,3,-5]);