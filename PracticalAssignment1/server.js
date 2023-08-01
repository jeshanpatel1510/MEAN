// const { log } = require('console');
let http = require('http');

let server = http.createServer((req, res)=>{
    res.write("Hello NodeJS!!");
    console.log("Server Script Executing!!");
}).listen(8000, ()=>{
    console.log("Server Listening!!");
})