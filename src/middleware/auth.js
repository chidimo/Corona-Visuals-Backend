import { authorizationSecret } from '../settings';

export const verifySecret = (req, res, next) => {
  const authorized = req.headers.authsecret === authorizationSecret;
  if (!authorized) {
    return res
      .status(422)
      .json({ success: false, message: 'Invalid authorization' });
  }
  return next();
};
