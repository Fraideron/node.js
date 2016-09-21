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
    var startDate = req.url.substr(13,8);
    var endDate = req.url.substr(22,8);

    if( (startDate.length != 8) || (endDate.length != 8)){
        res.send("Error! Invalid data!");
    } else {
        startDate = startDate.substring(0,2) + ',' + startDate.substring(2);
        startDate = startDate.substring(0,5) + ',' + startDate.substring(5);

        endDate = endDate.substring(0,2) + ',' + endDate.substring(2);
        endDate = startDate.substring(0,5) + ',' + endDate.substring(5);

        var minSec = (new Date(startDate)).getTime();
        var maxSec = (new Date(endDate)).getTime();

        var randomDate = Math.floor(Math.random() * (maxSec - minSec)) + minSec;

        res.send(new Date(randomDate));
    }
})




var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

})