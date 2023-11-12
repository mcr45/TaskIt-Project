import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




const apk='AIzaSyAkrzuZWyj_ZYKvy5kH2tsTF_XKt_zBU2A'
const signupurl='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
const signinurl='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='

export interface AuthResp{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private http:HttpClient) { }

  signUp(email:string,password:string){
    return this.http.post<AuthResp>(signupurl+apk,{email:email,password:password,returnSecureToken:true})
  }

  signIn(){

    return this.http.post
  }


}
