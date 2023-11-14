import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {


constructor(private auth:AuthService,private route:Router,private activeRoute:ActivatedRoute){}

errMsg=''



AuthFormSubmit(f:NgForm){
 /*  const {email,password}=f.value
console.log(email,password) */
if(!f.valid){return}
const {email,password}=f.value
this.auth.signUp(email,password).subscribe({next:(res)=>{console.log(res), this.route.navigate(['home']),this.errMsg=''},error:(err)=>{console.log(err),this.errMsg=err}})
/* ((res)=>{console.log(res); this.route.navigate(['home']),(err)=>{console.log(err),this.errMsg=err}}) */

f.reset()
}

}
