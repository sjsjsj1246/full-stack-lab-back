const { OAuth2Client } = require('google-auth-library');
import { GOOGLE_CLIENT_ID } from '../../configs';

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const googleOAuth2 = async (ctx) => {
  const ticket = await client.verifyIdToken({
    idToken: ctx.request.body.id_token,
  });
  ctx.body = {
    email: ticket.payload.email,
    name: ticket.payload.name,
    picture: ticket.payload.picture,
  };
};
