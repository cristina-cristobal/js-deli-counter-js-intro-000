/*
starts with empty deli => empty array titled "katzDeliLine"
*/

var katzDeliLine = [];

/*
creates function where a name is pushed into the array titled "katzDeliLine",
where index starts at 0.
*/

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

/* katzDeliLine.length referrs to the position of the name referrenced in the
array. E.g., if Ada is first entered, she becomes position 1.
Also the length of array (i.e., how many people in line)*/

// if array is greater than empty [], then....//

function nowServing(katzDeliLine) {
  if(katzDeliLine > []) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

// [] = empty array
/* .shift returns the beginning of array and then removes it (e.g., Ada)*/

function currentLine(katzDeliLine) {
var line = [];
if(katzDeliLine > []) {
  for(var i = 0; i < katzDeliLine.length; i++) {
      line.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + line;
}
    else {
      return "The line is currently empty."
    }
}

/* code used for tech eval on 12/13
var line = []
function takeANumber (line) {
  line.push(1);
  return line.length
}
}
var count = 0
function nowServing (count) {
  if (line.length = 0 || count = line.length) {
    return "closed"
  }
    return count++;
  }
*/

/* prompt = you're at a bakery and need to "take a number." Increment the number as customers walk in. */

/*var bakeryLine = []
function takeANumber (number) {
  bakeryLine.push(number)
  //return bakeryLine; ----> optional
}

bakeryLine; // returns the array you've created using the bakeryLine.push

prompt = you're at a bakery and want the count to increase by 1, but if it's zero
return "closed" */
