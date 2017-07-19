"use strict";

var config = require("../../config.json");
var knex = require("knex")({
  client: config.database.dialect,
  connection: {
    host: config.database.host,
    port: config.database.port,
    user: config.database.username,
    password: config.database.password,
    database: config.database.name,
    charset: "utf8"
  }
});

var bookshelf = require("bookshelf")(knex);

exports.__bookshelf = bookshelf;
exports.jsonify = function (ele) {
  return ele.toJSON();
};