import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { BehaviorSubject, pipe, tap } from 'rxjs';

const apk = 'AIzaSyAkrzuZWyj_ZYKvy5kH2tsTF_XKt_zBU2A';
const signupurl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const signinurl =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

export interface AuthResp {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResp>(signupurl + apk, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResp>(signinurl + apk, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
  }

  handleAuth(email: string, userId: string, token: string, exp: number) {
    const expDate = new Date(new Date().getTime() + exp * 1000);

    const taskItUser = new User(email, userId, token, expDate);
    this.currentUser.next(taskItUser);

    // Save the new user in localStorage
    localStorage.setItem('userData', JSON.stringify(taskItUser));
  }




}
