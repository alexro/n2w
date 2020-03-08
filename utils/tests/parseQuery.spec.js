'use strict';

const expect = require('chai').expect;
const parseQuery = require('../parseQuery');

describe('Parse thhp query: ', () => {
  it('should return query object with properties', () => {
    const query = parseQuery('/?a=1&b=2');
    expect(query).to.eql({ a: '1', b: '2' });
  });
});
