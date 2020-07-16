function caesarCipher(str, num) {
  num = num % 26;
  let lowerCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for(let i = 0; i < lowerCaseString.length; i++) {
    let currentLatter = lowerCaseString[i];
    if(currentLatter === '') {
      newString += currentLatter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLatter);
    let newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = 26 + newIndex;
    if(str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  };

  return newString;
}

caesarCipher('Zoo Keeper', 2);
