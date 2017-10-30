import assert from 'assert';
import proxyquire from 'proxyquire';

const stub = {
  default: class {
    constructor(options) {
      this.options = options;
    }
    getValue() {
      return this.options.number;
    }
  },
};

const romanNumeral = proxyquire('../../app/routes/roman-numeral', {
  '../class/RomanNumeral': stub,
});

describe('routes/roman-numeral', () => {
  it('Returns a 400 for missing parameters', () => {
    const ctx = { query: {} };

    romanNumeral.default(ctx);

    assert.equal(ctx.status, 400);
  });

  it('Returns a 400 for incorrect parameters', () => {
    const values = [false, null, -1, 4000, NaN, undefined];

    values.forEach((value) => {
      const ctx = { query: { number: value } };

      romanNumeral.default(ctx);

      assert.equal(ctx.status, 400, `Expected 400 for ${value}`);
    });
  });

  it('Catches errors when generating the numeral', () => {
    stub.default.constructor = () => {
      throw new Error('Something went wrong');
    };

    const ctx = { query: { number: 123 } };

    try {
      romanNumeral.default(ctx);
      assert.ok(false);
    } catch (e) {
      assert.ok(true);
    }
  });

  it('Returns a 200 with the correct data format', () => {
    const values = [1, 10, 50, 100, 200, 500, 1000, 2000, 3000, 3999];

    values.forEach((value) => {
      const ctx = { query: { number: value } };

      romanNumeral.default(ctx);

      assert.equal(ctx.status, 200);
      assert.equal(ctx.body.input, value);
      assert.equal(ctx.body.output, value);
    });
  });
});
