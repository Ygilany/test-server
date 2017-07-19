"use strict";

require("babel-polyfill");

var restify = require("restify");
var pkg = require("../package.json");
var config = require("../config.json");
var server = restify.createServer({
  name: pkg.name,
  version: pkg.version
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

// Routes
require("./routes/query")(server);

server.listen(config.server.port);
console.log("Listening on port " + config.server.port); // eslint-disable-line