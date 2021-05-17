import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import api from './api';
import { PORT } from './configs';

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('listening to port %d', port);
});
