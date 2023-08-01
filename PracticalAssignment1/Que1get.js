let http = require('http');
let urls = require('url');
let fs = require('fs');
let ns = require('node-static');

let fserver = new ns.Server("./images");

let server = http.createServer((req, res) => {
    let ur = urls.parse(req.url, true);
    if (ur.pathname == "/getRequest" && req.method === "GET") {
        let response = '<table>'
            + '<tr>'
            + '<td>House Owner : </td>'
            + '<td>' + ur.query.howner + '</td>'
            + '</tr>'
            + '<tr>'
            + '<td>House No. : </td>'
            + '<td>' + ur.query.block + '-' + ur.query.hno + '</td>'
            + '</tr>'
            + '<tr>'
            + '<td>Month : </td>'
            + '<td>' + ur.query.month + '</td>'
            + '</tr>'
            + '<tr>'
            + '<td>Paymant Amount : </td>'
            + '<td>' + ur.query.famount + '</td>'
            + '</tr>'
            + '</table>';
        res.write(response);
        console.log(response);
        res.end();
    } else if (req.url == "/index.html") {
        fs.readFile("./index.html", (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if (req.url == "/getRequest" && req.method === "POST") {
        var data = "";
        req.on('data', (chunk)=>{
            data += chunk.toString();
        });
        req.on('end', () => {
            let res1 = data.split("&");
            res.write("Owner Name : " + res1[2].split("=")[1] + "\n" + "House No. " + res1[1].split("=")[1] + "-" + res1[1].split("=")[1] + "\n" + "Month : " + res1[3].split("=")[1] + "\n" + "Payment Amount : " + res1[4].split("=")[1]);
            res.end();
        })
    } else {
        res.write("/getRequest not found!!");
        res.end();
    }
}).listen(8000, () => {
    console.log("Server Listening!!");
});