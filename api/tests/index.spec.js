'use strict';

const expect = require('chai').expect;
const api = require('../.');
const { mockReq, mockRes } = require('../../utils/tests/mocks');

describe('API', () => {
  it('should convert number to words', () => {
    const req = mockReq('/api/?n=23');
    const res = mockRes();

    api(req, res);

    expect(res.content).to.eql('twenty three');
  });

  it('should return N/A when no query string', () => {
    const req = mockReq('/api/?n=');
    const res = mockRes();

    api(req, res);

    expect(res.content).to.eql('N/A');
  });
});
