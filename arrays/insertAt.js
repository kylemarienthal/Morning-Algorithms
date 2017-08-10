function insertAt (arr,index,val){
  for (var i = arr.length; i >= index; i--){
    arr[i] = arr[i-1];
  }
  arr[index] = val;
  return arr;
}

insertAt()
