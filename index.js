function twoSum(numArray, sum) {
  let pairs = [];
  let hashTable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterPart = sum - currNum;

    if (hashTable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }

    hashTable.push(currNum);
  }

  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);
