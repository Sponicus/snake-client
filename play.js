//requires function to connect from client.js
const {connect} = require('./client');



console.log("Connecting...");
connect();
////////////////CREATE hnadleUserInput FUNCTION//////////////////////
const handleUserInput = (key) => {
  if (key === 'w') {
    process.stdin.write('Move: up')
  }
  if (key === 'a') {
    process.stdin.write('Move: left')
  }
  if (key === 's') {
    process.stdin.write('Move: down')
  }
  if (key === 'd') {
    process.stdin.write('Move: right')
  }
  if (key === '\u0003') {
    process.exit();
  }
};
//////////////////////////////////////////

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);///added to call on handleUserInput function
  return stdin;
};

setupInput();