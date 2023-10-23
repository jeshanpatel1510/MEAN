const express = require("express");
const app = express();
const route = require("./router/router");
const cors = require("cors");
const path = require("path");
const bp = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static("assets"));
app.use(cors());
app.use("", route);
app.listen(8080);