"use strict";

// const jsonify = require(`../Database`).jsonify;
var Bookshelf = require("./database").__bookshelf;

exports.runQuery = function (query) {
  return Bookshelf.knex.raw(query).then(function (data) {
    // any data massaging or cleaning is done here
    return data[0];
  }).catch(function (err) {
    throw new Error(err);
  });
};