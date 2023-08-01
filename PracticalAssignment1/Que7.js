let http = require('http');
let fs = require('fs').promises;

function fileUnlink(fpath)
{
    return new Promise((success, fail)=>{
        fs.unlink(fpath, (err, data)=>{
            if(err)
                fail(err)
            else
                success(data)
        })
    })
}

fileUnlink("./ZipFIle.gz")
    .then(data=>{
        console.log("File Unlinked!!");
    })
    .catch(err=>{
        console.log("Error : "+err);
    });