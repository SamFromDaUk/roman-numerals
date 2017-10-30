import assert from 'assert';
import RomanNumeral from '../../app/class/RomanNumeral';

describe('class/RomanNumeral', () => {
  it('Sets up options correctly', () => {
    const options = {
      number: 1,
    };

    const numeral = new RomanNumeral(options);

    assert.deepEqual(options.number, numeral.options.number);
  });

  it('Throws errors for invalid options', () => {
    const values = [false, null, undefined, {}, [], NaN];

    values.forEach((value) => {
      let didError = false;
      try {
        new RomanNumeral({ number: value }); // eslint-disable-line no-new
      } catch (e) {
        didError = true;
      }

      assert.ok(didError, `Expected ${value} to throw an error`);
    });
  });

  it('Reverses the order of numerals from human readable ascending to descending', () => {
    const options = {
      number: 1,
    };

    const numeral = new RomanNumeral(options);
    const divisions = numeral.options.numerals.map(item => (item.division));

    assert.deepEqual(divisions, divisions.sort().reverse());
  });

  it('Generates the expected numerals', () => {
    const tests = [{
      input: 1,
      output: 'I',
    }, {
      input: 2,
      output: 'II',
    }, {
      input: 4,
      output: 'IV',
    }, {
      input: 9,
      output: 'IX',
    }, {
      input: 30,
      output: 'XXX',
    }, {
      input: 150,
      output: 'CL',
    }, {
      input: 499,
      output: 'CDXCIX',
    }, {
      input: 701,
      output: 'DCCI',
    }, {
      input: 1050,
      output: 'ML',
    }, {
      input: 3000,
      output: 'MMM',
    }, {
      input: 3999,
      output: 'MMMCMXCIX',
    }];

    tests.forEach((test) => {
      const numeral = new RomanNumeral({ number: test.input });

      assert.equal(numeral.getValue(), test.output);
    });
  });
});
