import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {


constructor(private auth:AuthService){}





AuthFormSubmit(f:NgForm){
 /*  const {email,password}=f.value
console.log(email,password) */
if(!f.valid){return}
const {email,password}=f.value
this.auth.signUp(email,password).subscribe((res)=>{console.log(res),(err)=>{console.log(err)}})

}

}
