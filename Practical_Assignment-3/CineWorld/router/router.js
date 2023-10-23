const express = require("express");
const router = express.Router();
const CineWorld = require("../models/model.Connection");
const multer = require("multer");

const Storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "assets/images");
    },
    filename : (req, file, cb)=>{
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage : Storage
})


router.get("/remove-watchlist", (req, res)=>{
    console.log("Remove All");
    CineWorld.WatchList.deleteMany({})
    .then(()=>{
        res.sendStatus(200);
    })
    .catch((err)=>{
        res.status(501).send("Error : "+err);
    })
})

router.get("/remove-watchlist/:id", (req, res)=>{
    let id = req.params.id;
    CineWorld.WatchList.findOneAndRemove({WatchListId : id})
    .then(()=>{
        res.sendStatus(200);
    })
    .catch((err)=>{
        res.status(501).send("Error : "+err);
    })
})

router.post("/add-watchlist/:id", (req, res)=>{
    let id = req.params.id;
    CineWorld.WatchList.find({WatchListId : id})
    .then((records)=>{
        let newCineWorld = new CineWorld.WatchList({
            WatchListId : id
        }); 
    
        newCineWorld.save()
        .then(()=>{
            res.sendStatus(200);
        })
        .catch((err)=>{
            res.status(501).send("Error : "+err);
        })
    })
    .catch((err)=>{
        res.sendStatus(404);
    })
})

router.get('/watchlist' , (req , res)=>{
    CineWorld.WatchList.find({})
    .then((records)=>{
        res.send(records);
    })
    .catch((err)=>{
        res.status(404).send("Error : "+err);
    })
})

router.get("/content/:id", (req, res)=>{
    CineWorld.CineWorld.find({_id : req.params.id})
    .then((records)=>{
        res.send(records);
    })
    .catch((err)=>{
        res.status(404).send("Error : "+err);
    })
})

router.post("/edit/:id", upload.single("poster"), (req, res)=>{
    console.log(req.body);
    let name = req.body.name;
    let cast1 = req.body.cast1;
    let cast2 = req.body.cast2;
    let episodes = req.body.episodes;
    let aired = req.body.aired;
    let poster = req.file.originalname;

    CineWorld.CineWorld.findOneAndReplace({_id : req.params.id}, {
        Name : name,
        Cast1 : cast1,
        Cast2 : cast2,
        Episodes : episodes,
        Aired : aired,
        Image : poster
    })
    .then(()=>{
        res.sendStatus(200)
    })
    .catch((err)=>{
        res.status(501).send("Error : "+err);
    })
})

router.get("/edit/:id", (req, res)=>{
    CineWorld.CineWorld.find({_id : req.params.id})
    .then((records)=>{
        res.send(records);
    })
    .catch((err)=>{
        res.status(404).send("Error : "+err);
    })
})

router.get("/delete/:id", (req, res)=>{
    let id = req.params.id;
    CineWorld.CineWorld.findOneAndRemove({_id : id})
    .then(()=>{
        res.sendStatus(200);
    })
    .catch((err)=>{
        res.status(501).send("Error : "+err);
    })
})

router.post("/createContent", (req, res)=>{
    console.log("File Uploading!!");
    let name = req.body.name;
    let cast1 = req.body.cast1;
    let cast2 = req.body.cast2;
    let episodes = req.body.episodes;
    let aired = req.body.aired;
    var file = new fileupload();
    file = req.body.poster;
    var filename = file.name;
    console.log(filename);
    if(!req.files)
    {
        res.status(404).send("No File Found!!");
    }
    else
    {
        let dir = "C:/Users/kisho/OneDrive/Desktop/M.Sc.IT/Sem-7/MEAN/PA-3/Practical_Assignment-3/src/assets/images/"+filename;
        console.log(dir);
        file.mv("C:/Users/kisho/OneDrive/Desktop/M.Sc.IT/Sem-7/MEAN/PA-3/Practical_Assignment-3/src/assets/images/"+filename, (err)=>{
            if(err)
            {
                res.status(404).send("Error : "+ err);
            }
            else
            {
                let newCineWorld = new CineWorld.CineWorld({
                    Name : name,
                    Cast1 : cast1,
                    Cast2 : cast2,
                    Episodes : episodes,
                    Aired : aired,
                    Image : filename
                }); 
            
                newCineWorld.save()
                .then(()=>{
                    res.sendStatus(200);
                })
                .catch((err)=>{
                    res.status(501).send("Error : "+err);
                })
            }
        })
    }
})

router.get("/createContent", (req, res)=>{
    res.render("createContent");
})

router.post("/create", upload.single("poster"), (req, res)=>{
    let name = req.body.name;
    let cast1 = req.body.cast1;
    let cast2 = req.body.cast2;
    let episodes = req.body.episodes;
    let aired = req.body.aired;
    var filename = req.file.filename;

    let newCineWorld = new CineWorld.CineWorld({
        Name : name,
        Cast1 : cast1,
        Cast2 : cast2,
        Episodes : episodes,
        Aired : aired,
        Image : filename
    }); 

    newCineWorld.save()
    .then(()=>{
        res.sendStatus(200);
    })
    .catch((err)=>{
        res.status(501).send("Error : "+err);
    })
})

router.get("/create", (req, res)=>{
    res.render("createContent");
})

router.get('/cineworld' , (req , res)=>{
    CineWorld.CineWorld.find({})
    .then((records)=>{
        res.send(records);
    })
    .catch((err)=>{
        res.status(404).send("Error : "+err);
    })
})


module.exports  = router