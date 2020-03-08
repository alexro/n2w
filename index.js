'use strict';

const http = require('http');
const main = require('./main');

const PORT = process.env.PORT || 8080;
const ADDR = process.env.ADDR || 'localhost';

function server(req, res) {
  main(req, res);
  res.end('\n');
}

http.createServer(server).listen(PORT, ADDR, function(error) {
  if (!error) {
    console.log(`Server running at http://${ADDR}:${PORT}/`);
  }
});
