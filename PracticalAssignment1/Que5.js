let http = require('http');
let fs = require('fs');
let zlib = require('zlib');

let server = http.createServer((req, res)=>{
    fs.createReadStream('./ZipFile.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./ZipFile.gz'));
    console.log("File Zipped!!");
    res.end();
}).listen(8000, ()=>{
    console.log("Server Listening!!");
})