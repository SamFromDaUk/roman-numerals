require('babel-register');
require('dotenv-safe').load({
  allowEmptyValues: true,
  sample: './.env.dev',
});
require('./app/index.js');
