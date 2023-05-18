import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextApiResponse, NextApiRequest } from 'next';

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: '1h',
};

const REFRESH_SIGN_OPTION: SignOption = {
  expiresIn: '1h',
};
export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}
export function signJwtRefreshToken(
  payload: JwtPayload,
  options: SignOption = REFRESH_SIGN_OPTION,
) {
  const secret_key = process.env.SECRET_REFRESH_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
