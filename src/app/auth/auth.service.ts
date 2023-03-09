
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import * as formApp from "../store/app.reducer";

@Injectable({ providedIn: "root" })
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(private store: Store<formApp.AppState>) { }


  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
