// Business Logic

function numSplit(number) {
  let readySplit = number.toString();
  let readyArr = Array.from(readySplit);
  let outputArr = [];
  readyArr.forEach(function (element) {
    outputArr.push(parseInt(element))
  });
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

function inputTransform(inputNum) {
  let initArr = numSplit(inputNum);
  console.log(initArr);
}

// UI Logic

function singSong(inputNum) {
  console.log("singsong works and the input number is " +inputNum);
  const songStr = inputTransform(inputNum);
  console.log(songStr);
  $("#output-song").text(songStr);
  $("#output").toggle();
  $("#user-form").toggle();
}

function tryAgain() {
  $("label#label1").hide();
  $("label#label2").show();
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
      singSong(inputNum);
    } else {
      tryAgain();
    }
  });
  
  $("button#reset-btn").click(function() {
    location.reload(true);
  });
});