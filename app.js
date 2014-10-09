/**
* @author: Miles Bennett Dyson <mbdyson@cyberdinesystems.com>
**/

// Load the http module to create an http server.
var http = require('http');
var skynet = require('skynetCore');

var server = http.createServer(function (request, response) {
    skynet.start();
    // TODO: uncomment this method before shipping.
    //skynet.dontAttackHumans();
    skynet.attack();
});

server.listen(80);
