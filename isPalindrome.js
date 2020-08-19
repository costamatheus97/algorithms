// O(n)

function isPalindrome(string){
  string = string.toLowerCase()
  const stringArr = string.split('')
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const lettersArr = []


  stringArr.forEach(character => {
    if(validCharacters.includes(character)){
      lettersArr.push(character)
    }
  })

  if(lettersArr.join('') === lettersArr.reverse().join('')){
    return true
  } else { 
    return false
  }
}

isPalindrome("O romano acata amores a damas amadas e Roma ataca o namoro")