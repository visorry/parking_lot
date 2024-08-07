const fs = require('fs');
const readline = require('readline');
const CommandExecutor = require('./commands');

const commandExecutor = new CommandExecutor();

if (process.argv.length > 2) {
    // file input mode
    const fileStream = fs.createReadStream(process.argv[2]);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
  
    rl.on('line', (line) => {
      console.log(commandExecutor.execute(line));
    });
  } else {
    // Interactive mode
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.setPrompt('parking_lot> ');
    rl.prompt();
  
    rl.on('line', (line) => {
      console.log(commandExecutor.execute(line));
      rl.prompt();
    });
  }