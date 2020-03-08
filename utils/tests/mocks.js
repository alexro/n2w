'use strict';

const parseQuery = require('../parseQuery');

function mockReq(url) {
  const query = parseQuery(url);

  return {
    url,
    query
  };
}

function mockRes(obj = {}) {
  obj.writeHead = (code, str) => {
    obj.head = obj.head || {};
    obj.head.code = code;
    obj.head.str = str;
  };

  obj.write = str => {
    obj.content = obj.content || '';
    obj.content += str;
  };

  obj.end = () => {
    obj.end = true;
  };

  return obj;
}

module.exports = {
  mockReq,
  mockRes
};
