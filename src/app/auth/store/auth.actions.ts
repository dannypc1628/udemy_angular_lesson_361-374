import { Action } from "@ngrx/store";

export const LOGIN_START = "[Auth] Login Start";
export const LOGIN_FAIL = "[Auth] Login Fail";
export const LOGIN = "[Auth] Login";
export const LOGOUT = "[Auth] Logout";

export class Login implements Action {
  readonly type = LOGIN;
  payload: {
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
  };
  constructor(payload: {
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
  }) {
    this.payload = payload;
  }
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class LogFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Login | Logout | LoginStart | LogFail;
