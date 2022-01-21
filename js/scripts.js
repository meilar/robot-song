// Utility Logic

function numSplit(number) {
  let readySplit = number.toString();
  let arr = Array.from(readySplit);
  let outputArr = arr.map(Number);
  return outputArr;
}

function numTest(number) {
  let testIndex = [0, 0, 0];
  const numArr = numSplit(number);
  numArr.forEach(function(digit) {
    if (digit === 1) {
      ++testIndex[0];
      console.log("has a 1");
    }
    if (digit === 2) {
      ++testIndex[1];
      console.log("has a 2");
    }
    if (digit === 3) {
      ++testIndex[2];
      console.log("has a 3");
    }
  });
  return testIndex;
}


// Business Logic

// UI Logic