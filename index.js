function isPalindrome(string) {
  string = string.toLowerCase();
  let charactersArr = string.split('');
  let validCharacters = 'abcdefghijklmnopqrstuwxyz'.split('');

  let lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
  });

  if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

isPalindrome("Madam I'm Adam");