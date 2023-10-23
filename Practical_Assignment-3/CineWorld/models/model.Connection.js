const mongoose = require("mongoose");
const CineWorldModel = require("./model.CineWorld");
const WatchListModel = require("./model.WatchList");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://0.0.0.0:27017/CineWorldDB");

const CineWorld = mongoose.connection;

CineWorld.once("open", ()=>{
    console.log("Cine World Database Connected!!");
});

CineWorld.on("error", (req, res)=>{
    console.log("Connection Failed!!");
})

let Connection = {};

Connection.DB = CineWorld;
Connection.CineWorld = CineWorldModel;
Connection.WatchList = WatchListModel;

module.exports = Connection;