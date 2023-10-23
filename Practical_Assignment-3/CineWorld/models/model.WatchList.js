const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema({
    WatchListId : mongoose.Schema.Types.ObjectId
})

const Watchlist = mongoose.model("Watchlist", WatchlistSchema, "watchlist");

module.exports = Watchlist;