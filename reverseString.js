// O(n)

function reverseString(string){
  const newArray = []
  
  for(let n=string.length-1; n >= 0; n--){
    newArray.push(string[n])
  }
  
  return newArray.join('')
}

reverseString('race car')