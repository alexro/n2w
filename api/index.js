'use strict';

const number2words = require('../utils/number2words');
const parseQuery = require('../utils/parseQuery');

function api(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const query = parseQuery(req.url);
  res.write(number2words(query.n));
  return res;
}

module.exports = api;
