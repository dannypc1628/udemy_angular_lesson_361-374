import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>, private authService: AuthService) { }

  ngOnInit() {
    // this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
