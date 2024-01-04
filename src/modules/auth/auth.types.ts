export interface AppRequest extends Request {
  user: AppUserJWT;
}

export interface AppUserJWT {
  id: number;
  username: string;
  exp: number;
}
