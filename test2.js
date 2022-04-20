fs = require('fs');

const  elaborateFile = (inFileName, outFileName) => {
  const fileData = fs.readFileSync(inFileName, 'utf8');
  const  dataArray = fileData.split("\n");
  dataArray.shift();
  let out = 0;
  for(var i = 0; i <= dataArray.length-4;i++ ){
    out += patternrecogninsition(dataArray[i], dataArray[i+1+2]);  
  }
  out = `1
  ${out}`;
  fs.writeFileSync(outFileName, out);
}  

const patternrecogninsition = (test,answer) =>{
    let numberOfWhitesTest = 0;
    let numberOfBlacksTest = 0;
    let numberOfBlacksAnswer = 0;
    let numberOfWhitesAnswer = 0;
    test.split('').forEach(function(s) {
        s == '*' ? numberOfBlacksTest =  numberOfBlacksTest +1 : numberOfWhitesTest = numberOfWhitesTest +1 ; 
     });

     answer.split('').forEach(function(s) {
       s == '*' ? numberOfBlacksAnswer =  numberOfBlacksAnswer + 1: numberOfWhitesAnswer = numberOfWhitesAnswer + 1 ; 
     });
    if(numberOfWhitesAnswer == numberOfWhitesTest) return 0;
    if(numberOfWhitesAnswer == 0) return numberOfWhitesTest;
    return numberOfWhitesTest < numberOfWhitesAnswer || numberOfWhitesAnswer ? numberOfWhitesAnswer - numberOfWhitesTest : numberOfWhitesTest - numberOfWhitesAnswer;
}

elaborateFile('data.in', 'dataOut.out');
