/**
 * Created by valeriy on 06.09.16.
 */
"use strict"
var names = require('./storage/user')

var name = new names.Names();

var http = require('http');

var  server = new http.Server();

server.listen(8096, '127.0.0.1');

server.on('request', function (req, res) {
    res.end(name.showNames());
    server.close();
})
