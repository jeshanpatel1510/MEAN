let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res)=>{
    if(req.url == "/gethello" && req.method == "GET")
    {
        res.write("Hello NodeJS!!");
        res.end();
    } else if(req.url == "/"){
        fs.readFile("./Que2.html", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }
    else
    {
        res.write("/gethello route not found!! :(");
        res.end();
    }
}).listen(8000, ()=>{
    console.log("Server Listening!!");
})
