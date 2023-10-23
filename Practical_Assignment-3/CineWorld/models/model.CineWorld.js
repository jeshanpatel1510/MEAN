const mongoose = require("mongoose");

const cineworldSchema = mongoose.Schema({
    Name : String,
    Cast1 : String,
    Cast2 : String,
    Episodes : Number,
    Aired : Date,
    Image : String
});

const Model = mongoose.model("CineWorld", cineworldSchema, "content");

module.exports = Model;