function reverseArrayInPlace(arr){
  for(i=0;i<arr.length / 2;i++){
    var tempVar = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tempVar

  }

  return arr
}

reverseArrayInPlace(['um', 'dois', 'tres', 'quatro'])