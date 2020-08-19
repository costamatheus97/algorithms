// O(n)

function reverseString(string){
  const newArray = []
  const separatedWords = string.split(' ')
  
  separatedWords.forEach(word => {
    const reversedWord = word.split('').reverse().join('')
    newArray.push(reversedWord)
  })
  
  
  return newArray.join(' ')
}

reverseString('this is a string of words')