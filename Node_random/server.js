/**
 * Created by valeriy on 06.09.16.
 */

"use strict"

var express = require('express');
var app = express();

const resource = {
    coordinates: {
        googleAPI: require('./resources/coordinates/google-api-coordinates-resource')
    },
    uinames:{
        uinamesAPI: require('./resources/names/uinames-api-resources')
    }

    //to add some data for
};



// This responds a POST request for the homepage
app.get('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
    log("Information", "Got a GET request for root page")
})



// This responds a GET request for the /list_user page.


// This responds a GET request for random coordinates.
app.get('/random/:amount*?/coordinates', function (req, res) {
    if (req.params.amount) {

    } else {
        resource.coordinates.googleAPI(function (location) {
            res.send({
                result: {
                    n: location.lat,
                    e: location.lng
                },
                code: 'OK'
            });
        });
    }
    log("Information","Got a GET request for random coordinateds");
});

//:todo add random date without range
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
});



//This response a GET request from uinames API for credit card
//:todo add option for all information and number of card
app.get('/random/uinames/creditCard',function (req, res) {
    resource.uinames.uinamesAPI(function (body) {
        // todo: to add credit card return
        res.send({
            result: body.credit_card,
            code: 'OK'
        });
    });
    log("Information","Got a GET request for random namesio for credit card");
});


//This response a GET request from uinames API for email
app.get('/random/uinames/email',function (req,res) {
    resource.uinames.uinamesAPI(function (body) {
        res.send({
            result: body.email,
            code: 'OK'
        });
    });
    log("Information","Got a GET request for email");
});

app.get('/random/uinames/name',function (req, res) {
    resource.uinames.uinamesAPI(function (body) {
        res.send({
            result: body.name,
            code: 'OK'
        });
    });
    log("Information","Got a GET request for name");
});


app.get('/random/uinames/surname',function (req, res) {
    resource.uinames.uinamesAPI(function (body) {
        res.send({
            result: body.surname,
            code: 'OK'
        });
    });
    log("Information","Got a GET request for surname");
});


app.get('/random/uinames/age',function (req, res) {
    resource.uinames.uinamesAPI(function (body) {
        res.send({
            result: body.age,
            code: 'OK'
        });
    });
    log("Information","Got a GET request for age");
});





//This response a GET request from uinames API for countries
app.get('/random/uinames/region',function (req, res) {
    resource.uinames.uinamesAPI(function (body) {
        res.send({
            result: body.region,
            code: 'OK'
        });
    });
    log("Information","Got a GET request for region");
});


//This response a GET request from uinames API for countries
app.get('/random/uinames/mobile',function (req, res) {
    resource.uinames.uinamesAPI(function (body) {
        res.send({
            result: body.phone,
            code: 'OK'
        });
    });
    log("Information","Got a GET request mobilePhone");

});

//This response a GET request from uinames API for countries
app.get('/random/uinames/password',function (req, res) {
    resource.uinames.uinamesAPI(function (body) {
        res.send({
            result: body.password,
            code: 'OK'
        });
    });
    log("Information","Got a GET request for random namesio for password");

});


app.get('/random/ip',function (req, res) {
    let ip = ' ';
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    let fourth = Math.floor(Math.random() * 255);
    ip = first + '.' + second + '.' + third + '.' + fourth;
    res.send({
            rezult: ip,
            code: 'OK'
    });
    log("Information","Got a GET request for random ip");
});


app.get('/random/ipv6',function (req, res) {
    let tempMass = ['1','2','3','4',
                    '5','6','7','8',
                    '9','0','a','b',
                    'c','d','e','f'];
    let arrValues = tempMass.length;
    let ip = '';
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 4; j++){
            ip += tempMass[Math.floor(Math.random() * arrValues )];
        }
        ip += '.';
    };
    ip = ip.substr(0, ip.length-1);
    res.send({
        rezult: ip,
        code: 'OK'
    });
    log("Information","Got a GET request for random ip");
});

function log(type, body) {
    var date = new Date();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log(formattedTime + " " + type +" [" + body + "]"+"\n");
};




let server = app.listen(8081, function () {

    let host = server.address().address;
    let port = server.address().port;

    log("Information!", "Example app listening at http://%s:%s" + host + port);

})

