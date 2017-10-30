# Roman Numeral API

### System Dependencies

NVM or NodeJS 8.6.0

### Setup

1) `nvm use` - or manually install NodeJS 8.6.0
2) `npm install`
3) `cp .env.dev .env` - default port is 3000
4) `npm start`

### Commands

`start` - Start the app for production
`dev` - Start the app with nodemon
`lint` - Run the linter
`test` - Run the tests

### Endpoints

`GET /ping` - Health check endpoint, will return `pong` if that app is alive
`GET roman-numeral?number=*` - Returns the roman numeral in format { "input": "1", "output": "I" }

### Caveats

I wouldnt have used a class here for generating roman numerals, this is a good use case for pure functions.

The test didnt specify if there needed to be UI or not, in the real world you would generate numerals on the front end.

I used babel register to allow the use of import in the app, however this requires an additional file (see server.js). This shouldnt be used in production as it it less performant that adding a build step.

I made the numeral divisions configurable when the class is initialised, but there isnt really any need. I would probably remove this from options if I spent more time on this.

On test/test/routes/roman-numeral.js:29 I was going to add true to the expected fail states, however it does gets coerced to 1. I decided this was a rare edge case and that it wasnt worth adding an additional error check for.
