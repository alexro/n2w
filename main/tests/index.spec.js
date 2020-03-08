'use strict';

const expect = require('chai').expect;
const main = require('../.');
const { mockReq, mockRes } = require('../../utils/tests/mocks');

describe('Main', () => {
  it('should return the home page', () => {
    const req = mockReq('/');
    const res = mockRes();

    main(req, res);

    expect(res.head.code).to.eql(200);
    expect(res.content.indexOf('<a href=') > 0).to.eql(true);
  });
});
