"use strict";

module.exports = function (res, message) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  res.status(200);
  res.json({
    status: "SUCCESS",
    message: message,
    data: data
  });
};