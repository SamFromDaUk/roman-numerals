const defaultOptions = {
  numerals: [{
    symbol: 'I',
    division: 1,
  }, {
    symbol: 'IV',
    division: 4,
  }, {
    symbol: 'V',
    division: 5,
  }, {
    symbol: 'IX',
    division: 9,
  }, {
    symbol: 'X',
    division: 10,
  }, {
    symbol: 'XL',
    division: 40,
  }, {
    symbol: 'L',
    division: 50,
  }, {
    symbol: 'XC',
    division: 90,
  }, {
    symbol: 'C',
    division: 100,
  }, {
    symbol: 'CD',
    division: 400,
  }, {
    symbol: 'D',
    division: 500,
  }, {
    symbol: 'CM',
    division: 900,
  }, {
    symbol: 'M',
    division: 1000,
  }],
  number: null,
};

export default class {
  constructor(options) {
    if (!options.number) {
      throw new Error(`Expected options.number but recieved: ${options.number}`);
    }

    if (Number.isNaN(options.number) || typeof options.number !== 'number') {
      throw new Error(`Expected options.number to be of type number but recieved: ${options.number}`);
    }

    this.options = Object.assign({}, defaultOptions, options);

    // Change from human readable ascending order to machine readable descending order.
    this.options.numerals = this.options.numerals.slice().reverse();
  }

  getValue() {
    let output = '';
    let temp = this.options.number;

    this.options.numerals.forEach((numeral) => {
      while (temp / numeral.division >= 1) {
        output += numeral.symbol;
        temp -= numeral.division;
      }
    });

    return output;
  }
}
