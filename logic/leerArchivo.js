const fs = require('fs');
/**
 * Parameter: async iterable of chunks (strings)
 * Result: async iterable of lines (incl. newlines)
 */
 async function* chunksToLines(chunksAsync) {
    let previous = '';
    for await (const chunk of chunksAsync) {
      previous += chunk;
      let eolIndex;
      while ((eolIndex = previous.indexOf('\n')) >= 0) {
        // line includes the EOL
        const line = previous.slice(0, eolIndex+1);
        yield line;
        previous = previous.slice(eolIndex+1);
      }
    }
    if (previous.length > 0) {
      yield previous;
    }
  }

  /**
 * Parameter: async iterable of lines
 * Result: async iterable of numbered lines
 */
async function* numberLines(linesAsync) {
    let counter = 1;
    for await (const line of linesAsync) {
      yield counter + ': ' + line;
      counter++;
    }
  }

  async function main() {
    const inputFilePath = `${__dirname}/PlanCiclo.txt`;
    const readStream = fs.createReadStream(inputFilePath,
      { encoding: 'utf8', highWaterMark: 1024 });
      console.log(numberLines(chunksToLines(readStream)));
  }

  module.exports ={main};