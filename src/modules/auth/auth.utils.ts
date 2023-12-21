import * as crypto from 'crypto';

export const hashPassword = (password: string) => {
  const key = crypto.createCipher('aes-128-cbc', password);
  let hash = key.update(password, 'utf8', 'hex');
  hash += key.final('hex');
  return hash;
};

export const validatePassword = (input: string, originalPassword: string) => {
  return input === originalPassword;
};

/** Valid for one day */
export const JWTExpirationTime = 60 * 60 * 24;

export const createJWTExpirationDate = (longExpiration?: boolean) => {
  const date = new Date();
  if (longExpiration) {
    date.setFullYear(date.getFullYear() + 1);
  }
  return Math.ceil(date.getTime() / 1000 + JWTExpirationTime);
};

export const CookieAccessTokenKey = 'access_token';
