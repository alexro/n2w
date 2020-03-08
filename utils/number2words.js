'use strict';

const numw = `zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen`;
const nums = numw.split(' ');
const tens = `twenty thirty forty fifty sixty seventy eighty ninety`.split(' ');
const mgns = `quadrillion trillion billion million thousand`
  .split(' ')
  .concat('');

function below100(n, magnitude, original) {
  if (n === 0 && magnitude !== '') {
    return '';
  } else if (n === 0 && original !== 0) {
    return '';
  } else if (n < 20) {
    return nums[n];
  } else {
    const digit = n % 10;
    return tens[~~(n / 10) - 2] + (digit ? ' ' + nums[digit] : '');
  }
}

function below1000(n, magnitude, original) {
  const hundreds = ~~(n / 100);
  const under100 = below100(n % 100, magnitude, original);
  if (hundreds === 0 && under100 === '') {
    return '';
  } else if (hundreds === 0) {
    return `${under100} ${magnitude}`;
  } else {
    return `${nums[hundreds]} hundred ${under100} ${magnitude}`;
  }
}

function number2words(n) {
  let number = `${n}`;

  if (n !== 0 && !parseInt(number, 10)) {
    return 'N/A';
  }

  // make a 18 digit string padded with zeroes and split into 3 digit parts
  const parts = number
    .padStart(18, 0)
    .substr(0, 18)
    .match(/.{3}/g);
  const results = parts.map((part, index) =>
    below1000(parseInt(part, 10), mgns[index], n)
  );
  return results
    .join(' ')
    .trim()
    .replace(/ +(?= )/g, '');
}

module.exports = number2words;
