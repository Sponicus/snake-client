const net = require('net');// creates requirement for the net

//function to connect
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243', 
    port: 50541
  });
  conn.setEncoding('utf8');
  //notification of connection
  conn.on('connect', () => {
    console.log('connected');
  });
  //event handler
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

console.log("Connecting...");



connect();

