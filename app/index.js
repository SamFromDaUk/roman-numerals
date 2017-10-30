import Koa from 'koa';
import Router from 'koa-router';
import routes from './routes/index';

const app = new Koa();
const router = new Router();

routes(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT);
console.log(`Listening on ${process.env.PORT}`);
