let http = require('http');
let fs = require('fs');

let ns = require('node-static');

let fserver = new ns.Server("./images");

let server = http.createServer((req, res) => {
 
    fserver.serve(req, res);
}).listen(8000, () => {
    console.log("Server Listening!!");
});