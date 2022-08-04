/**
 *  MAIN INDEX.JS
 *  starts, runs and listen to webserver
 *  @author GrimFilerino
 **/


const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

const middlewears = require("./middlewear/middlewears.js");
const routeIndex = require("./routes/index.js");

app.set('view engine', '');
app.use(middlewears.showRequestOnLoad);
app.use(middlewears.enableCors);

app.use(bodyParser.json());

app.use("/",routeIndex);

app.listen(port, "0.0.0.0" ,() => {
    console.log("Server is listening on port " + port);
});