fs = require('fs');

function elaborateFile(inFileName, outFileName) {
  console.time(inFileName);
  let fileData = fs.readFileSync(inFileName, 'utf8');
  let dataArray = fileData.split("\n");
  let casesNum = dataArray.shift();

  let out = '';
  for (let i = 1; i <= casesNum; i++) {
    let caseCodes = dataArray.shift().split(' ');
    out += elaborateCase(i, caseCodes);
    out += '\n';
  }

  fs.writeFileSync(outFileName, out);
}


function elaborateCase(caseNum, caseCodes) {

  let unique = new Set();
  let length = caseCodes.length;

  for (let index = 0; index < length; index++) {
    let value = caseCodes[index];
    if (unique.has(value))
      unique.delete(value);
    else
      unique.add(value);
  }

  return 'Case #' + caseNum + ': ' + Array.from(unique).join(' ');
}


elaborateFile('1.in', 'oval-quiz-sm.out');