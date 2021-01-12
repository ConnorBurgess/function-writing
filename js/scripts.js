
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);

}
function firstLast(sentence){
  const stringLength = sentence.length;
  let twoLetters = sentence.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();
  return twoLetters;
}
function reverse(twoString) {
  let first = twoString.slice(0,1);
  let second = twoString.slice(1,2);
  return second + first;
}

function firstLastReverse (sentence) {
  return sentence.concat(reverse(firstLast(sentence)));
}

function midChar(sentence) {
  return sentence.charAt(sentence.length/2);
}

function outTextWhole(inputText) {
  $("#output").text(inputText);
}

function outTextEdited(inputText){
  $("#output").text(midChar(inputText) + firstLastReverse(inputText));
}

function start() {
  let sentence = prompt("Please input a sentence");
  $("#imgOne").click(function() {outTextWhole(sentence);
  $("#imgOne").addClass("hidden");
  $("#imgTwo").removeClass("hidden");
  }) 
  $("#imgTwo").click(function() {outTextEdited(sentence);
  $("#imgTwo").addClass("hidden");
  $("#imgOne").removeClass("hidden");
  });
}

// alert(capitalizeFirstLetter(sentence)); 

// alert(midChar(sentence)+ firstLastReverse(sentence));

$(start);