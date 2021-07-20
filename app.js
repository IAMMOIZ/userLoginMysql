var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var route = require("./route/auth" , route)
// var config = require("./config/config");
var app = express();
// app.use(auth.verifyToken);
app.use(bodyParser.json({
    limit : "50mb"
}))


 app.use(
 bodyParser.urlencoded({
limit: "50mb",
extended: true,
  parameterLimit: 50000,
}));
app.use("/v1" , route );

// var server = app.listen(config.PORT, function () {
app.listen(5000, function () {
        console.log('user service running at 5000');
        })
module.exports = app;
        