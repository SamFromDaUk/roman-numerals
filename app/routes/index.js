import ping from './ping';
import romanNumeral from './roman-numeral';

export default (router) => {
  console.log('GET /ping');
  router.get('/ping', ping);

  console.log('GET /roman-numeral');
  router.get('/roman-numeral', romanNumeral);
};
