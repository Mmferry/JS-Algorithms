function reverseWords(string) {
  let wordArr = string.split(' ');
  let reversedWordsArr = [];

  wordArr.forEach(word => {
    let reversedWord = '';
    for(let i = word.length - 1; i >= 0; i--){
      reversedWord += word[i];
    }

    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}

reverseWords('Mohammed Fared');
