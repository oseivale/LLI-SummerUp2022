const fs = require('fs');

// console.log(process.cwd());
// console.log(process.argv);

// const args = process.argv.slice(2);

// for (let arg of args) {
//     console.log(`Hello ${arg}`);
// }

const folderName = process.argv[2] || 'Project';
// console.log(typeof folderName);

// fs.mkdirSync(folderName);

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '');
fs.writeFileSync(`${folderName}/style.css`, '');
fs.writeFileSync(`${folderName}/app.js`, '');

// Node.js program to demonstrate the
// fs.writeFileSync() method

// Import the filesystem module
// const fs = require('fs');

// let data =
//     'This is a file containing a collection' +
//     ' of programming languages.\n' +
//     '1. C\n2. C++\n3. Python';

// fs.writeFileSync('programming.txt', data);
// console.log('File written successfully\n');
// console.log('The written has the following contents:');
// console.log(fs.readFileSync('programming.txt', 'utf8'));
