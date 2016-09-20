/**
 * Created by valeriy on 06.09.16.
 */

"use strict"

var express = require('express');
var app = express();

var Names = require('./storage/user')
var name = new Names();
var randomName = "";



// This responds with "Hello World" on the homepage
app.get('/random/names', function (req, res) {
    console.log("Got a GET request for the random names");
    randomName = name.showName();
    res.send('<a href="./names/'+ randomName +'">' + randomName);
})


// This responds a POST request for the homepage
app.get('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})



// This responds a GET request for the /list_user page.
app.get('/storage/json', function (req, res) {
    console.log("Got a GET request for /storage/json");
    res.send(name.showJSON());
})

// This responds a GET request for information about user
app.get('/random/names/*', function(req, res) {
    console.log("Got a GET request random name");
    res.send(name.showInformationAboutName(randomName));
})


// This responds a GET request for random date
app.get('/random/date/\\d{8}/\\d{8}', function(req, res) {
    console.log(new Date(2016123100000));
    res.send(new Date(req.url.substr(13,8)));
})




var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

})