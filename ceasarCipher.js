function ceasarCipher(str, num){
  const lowerCaseStr = str.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let newStr = ''

  for(i = 0; i < lowerCaseStr.length; i++){
  const currentLetter = lowerCaseStr[i]

  if(currentLetter === ' '){
    newStr += currentLetter;
    continue
  }

  const currentIndex = alphabet.indexOf(currentLetter)
  let newIndex = currentIndex + num

  if(newIndex > alphabet.length - 1){
    newIndex = newIndex - alphabet.length
  }

  if(currentIndex < 0){
    alert('Special characters not allowed')
    return
  }

  newStr += alphabet[newIndex]

  }
  return newStr
}

ceasarCipher('i love to code', 2)