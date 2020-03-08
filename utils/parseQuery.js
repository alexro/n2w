'use strict';

function parseQuery(url) {
  const query = {};
  if (url.indexOf('?') > 0) {
    const queryString = url.split('?')[1];
    var pairs = queryString.split('&');

    for (let i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
  }
  return query;
}

module.exports = parseQuery;
