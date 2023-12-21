export interface AppRequest extends Request {
  user: AppUserJWT;
}

export interface AppUserJWT {
  id: string;
  username: string;
  exp: number;
}
