function getRandomInt(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var redShirts = getRandomInt(2, 100);
if (redShirts < 49) {
  alert("Not enough shirts!! You only " + redShirts  + " shirts 👚");
} else {
  var shirtsStr = '';
  for (var i = 0,shirtsOnPrevLine=0,shirtsOnCurrLine=0; i < redShirts; i++) {
    shirtsStr += '👚';
    shirtsOnCurrLine++;
    if((shirtsOnPrevLine+1)==shirtsOnCurrLine){
      shirtsStr+='\n';
      shirtsOnPrevLine=shirtsOnCurrLine;
      shirtsOnCurrLine=0;
    }
  }

  alert("Yay, enough shirts!!! We have " + redShirts + " shirts\n" + shirtsStr);
}