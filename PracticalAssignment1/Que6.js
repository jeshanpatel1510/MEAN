let http = require('http');
let fs = require('fs');
let zlib = require('zlib');

let server = http.createServer((req, res)=>{
    fs.createReadStream('./ZipFile.gz')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./ZipFile2'));
    console.log("File Uncompressed!!");
    res.end();
}).listen(8000, ()=>{
    console.log("Server Listening!!");
})