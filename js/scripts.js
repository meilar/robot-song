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

// function inputTransform(input)

// UI Logic
function singSong() {
  console.log("singsong works")
  $("#output").toggle();
  $("#user-form").toggle();
}

function validation(number) {
  if (number != NaN && number >= 0) {
    return true;
  } else {
    return false;
  } 
}


$(document).ready(function() {
  $("button#go-btn").click(function() {
    const inputNum = parseInt($("input#user-number").val());
    console.log("input num is " + inputNum);
    if (validation(inputNum)) {
      singSong();
    } else {
      $("label#label1").hide();
      $("label#label2").show();
    }
 

  });
  $("button#reset-btn").click(function() {
    location.reload(true);
  });
});