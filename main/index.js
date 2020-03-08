'use strict';

const api = require('../api')

function main(req, res) {
  if (req.url.startsWith('/api')) {
    return api(req, res)
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><head><body><h1>API to convert numbers to words: <a href="/api?n=19">Click here</a></h1></body></head></html>');

  return res;
}

module.exports = main;
