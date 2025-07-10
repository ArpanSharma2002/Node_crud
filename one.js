const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
fs.readFile('./one.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
    });   
}).listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});



// fs.appendFile('two.html', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });