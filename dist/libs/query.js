"use strict";

var jsonify = require("./database").jsonify;
var Bookshelf = require("./database").__bookshelf;

exports.runQuery = function (query) {
  return Bookshelf.knex.raw(query).then(function (data) {
    // any data massaging or cleaning is done here
    return data[0];
  }).catch(function (err) {
    throw new Error(err);
  });
};

exports.getRandom = function () {
  return Bookshelf.knex.raw("SELECT * FROM AbMe.quotes ORDER BY rand() LIMIT 1").then(function (data) {
    return {
      id: data[0][0].id,
      text: data[0][0].text
    };
  }).catch(function (err) {
    throw new Error(err);
  });
};