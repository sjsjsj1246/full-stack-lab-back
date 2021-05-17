import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/google', authCtrl.googleOAuth2);

export default auth;
