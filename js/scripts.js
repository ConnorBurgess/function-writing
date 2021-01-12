let sentence = prompt("Please input a sentence");

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
// alert(capitalizeFirstLetter(sentence)); 

alert(midChar(sentence)+ firstLastReverse(sentence));

