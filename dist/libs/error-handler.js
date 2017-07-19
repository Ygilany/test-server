"use strict";

module.exports = function (res, err) {
  console.log(err);
  res.status(500);
  res.json({
    status: "ERROR",
    message: err.message
  });
};