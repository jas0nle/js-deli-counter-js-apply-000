function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  var line = [];
  var i = 0;
  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  var i = 0;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (i = 0; i < katzDeliLine.length; i++) {
      line.push(' ' + [i+1] + '. ' + katzDeliLine[i]);
    }
  }
  return `The line is currently:${line}`;
}