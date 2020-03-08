'use strict';

const expect = require('chai').expect;
const number2words = require('../number2words');

describe('Convert number to words: ', () => {
  it('should return N/A when input is not a integer', () => {
    expect(number2words('asd')).to.equal('N/A');
  });

  it('should match results', () => {
    const results = [
      number2words(0),
      number2words(3),
      number2words(11),
      number2words(89),
      number2words(547),
      number2words(1321),
      number2words(12630),
      number2words(500400),
      number2words(2100510),
      number2words(92100510),
      number2words(1000012630),
      number2words(1000000000000)
    ];

    const words = [
      'zero',
      'three',
      'eleven',
      'eighty nine',
      'five hundred forty seven',
      'one thousand three hundred twenty one',
      'twelve thousand six hundred thirty',
      'five hundred thousand four hundred',
      'two million one hundred thousand five hundred ten',
      'ninety two million one hundred thousand five hundred ten',
      'one billion twelve thousand six hundred thirty',
      'one trillion'
    ];

    expect(results).to.eql(words);
  });
});
