function binarySearch(numArray, key) {
  let middleIndex = Math.floor(numArray.length / 2);
  let middleELem = numArray[middleIndex];

  if(middleELem === key) return true;
  else if (middleELem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key)
  }
  else if(middleELem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key)
  }
  else return false;
}

binarySearch([5, 7, 16, 36, 39, 42, 56, 71], 56);
