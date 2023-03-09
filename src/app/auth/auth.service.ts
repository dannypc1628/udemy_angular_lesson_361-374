
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import * as formApp from "../store/app.reducer";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(

    private store: Store<formApp.AppState>
  ) { }


  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }


}
