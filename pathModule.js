const path = require('path');

console.log(__dirname);
console.log(__filename);


const pathName = path.join("company", "node", "data.txt");
console.log(pathName);

const parseData = path.parse(pathName);
const resolvePath = path.resolve(pathName);
const extname = path.extname(pathName);
const basename = path.basename(pathName);
const dirname = path.dirname(pathName);

console.log({parseData, resolvePath, extname, basename, dirname});