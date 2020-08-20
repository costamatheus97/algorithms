function twoSum(numArr, sum){
  let newArray = []

  for(i=0; i < numArr.length; i++){
    for(j=0; j < numArr.length; j++){
      if(numArr[i] + numArr[j] === sum){
        newArray.push([numArr[i], numArr[j]])
      }
    }
  }

  return newArray
}

twoSum([5, 3, 1, 6, 2, 4], 8)