function bubbleSort(arr){
  for(i = arr.length; i > 0; i--){
    for(j=0; j < i; j++){
      if(arr[j] > arr[j + 1 ]){
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

bubbleSort([2,3,4,1,2,6,8])