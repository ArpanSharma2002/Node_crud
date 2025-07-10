// const http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);


// console.log(module);         



const add = (a, b) => {
  return a + b;
}

// module.exports = add;

// exports.isDateTime = () => {
//   return Date();
// }

// export const isDateTime = () => new Date().toISOString();


const sub = (a, b) => {
  return a - b;
}

const multi = (a, b) => {
  return a * b;
}

const div = (a, b) => {
  return a / b;
}

module.exports = {
  add,
  sub,
  multi,
  div
};