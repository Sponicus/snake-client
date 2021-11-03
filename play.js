//requires function to connect from client.js
//requires functions to read input from input.js
const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting...");
connect();

setupInput();

