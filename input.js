let connection;

const handleUserInput = (key) => {
  if (key === 'w') {
    // console.log('up ');
    // process.stdin.write('Move: up');
    connection.write('Move: up');
  }
  if (key === 'a') {
    // console.log('left ');
    // process.stdin.write('Move: left');
    connection.write('Move: left');
  }
  if (key === 's') {
    // console.log('down ');
    // process.stdin.write('Move: down');
    connection.write('Move: down');
  }
  if (key === 'd') {
    console.log('right ');
    // process.stdin.write('Move: right');
    connection.write('Move: right');
  }
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function (conn) {// added con as a parameter
  connection = conn;// connected conn parameter with connection
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};
