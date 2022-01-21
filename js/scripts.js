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
    }
    if (digit === 2) {
      ++testIndex[1];
    }
    if (digit === 3) {
      ++testIndex[2];
    }
  });
  return testIndex;
}

function validation(number) {
  if (number != NaN && number >= 0) {
    return true;
  } else {
    return false;
  } 
}

function arrBuilder(inputNum) {
  let index = 0;
  let outputArr = []
  for (let iteration = 0; iteration < inputNum; iteration++) {
    index++;
    outputArr.push(index);
  };
  return outputArr;
} 

function inputTransform(inputNum) {
  let initArr = arrBuilder(inputNum);
  let outputArr = []
  initArr.forEach(function(number) {
    let numScore = numTest(number);
    if (numScore[2] > 0) {
      outputArr.push("Won't you be my neighbor?");
    } else if (numScore[1] > 0) {
      outputArr.push("Boop!");
    } else if (numScore[0] > 0) {
      outputArr.push("Beep!");
    } else {
      outputArr.push(number);
    }
  });
  return outputArr;
}

// UI Logic

function singSong(inputNum) {
  const songArr = inputTransform(inputNum);
  const songStr = songArr.join(" ");
  console.log(songStr);
  $("#output-song").text(songStr);
  $("#output").toggle();
  $("#user-form").toggle();
}

function invalid() {
  $("label#label1").hide();
  $("label#label3").hide();
  $("label#label2").show();
}

function tooBig() {
  $("label#label1").hide();
  $("label#label2").hide();
  $("label#label3").show();
}

$(document).ready(function() {
  $("button#go-btn").click(function() {
    const inputNum = parseInt($("input#user-number").val());
    if ((validation(inputNum)) === false) {
      invalid();
    } else if (inputNum > 99) {
      tooBig();
    } else {
      singSong(inputNum);
    }
  });
  
  $("button#reset-btn").click(function() {
    location.reload(true);
  });
});