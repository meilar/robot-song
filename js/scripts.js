// Utility Logic

function numSplit(number) {
  let readySplit = number.toString();
  let arr = Array.from(readySplit);
  let outputArr = arr.map(Number);
  return outputArr;
}

function testBeep(number) {
  let testIndex = 0;
  const numArr = numSplit(number);
  numArr.forEach(function(digit) {
    if (digit === 1) {
      ++testIndex;
    }
  });
  if (testIndex === 0) {
    return false;
  } else {
    return true;
  }
}


// Business Logic

// UI Logic