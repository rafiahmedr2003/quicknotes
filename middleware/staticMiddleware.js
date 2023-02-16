const express = require("express");
const path = require("path");

const serveStaticFiles = () => {
  return express.static(path.join(__dirname, "../client/build"));
};

module.exports = serveStaticFiles;
