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

// or

function twoSum(numArray, sum) {
  const pairs = [];
  const hashTable = [];
 
  for (var i = 0; i < numArray.length; i++) {
    const currNum = numArray[i];
    const counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}
 
twoSum([1, 6, 4, 5, 3, 3], 7);