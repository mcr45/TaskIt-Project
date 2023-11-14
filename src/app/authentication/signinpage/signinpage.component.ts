import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent {
errMsg
constructor(private auth:AuthService,private route:Router,private activeRoute:ActivatedRoute){}


SignFormSubmit(f:NgForm){
const {email,password}=f.value
if(!f.valid){return}
this.auth.signIn(email,password).subscribe({next:(res)=>{console.log(res);this.route.navigate(['home']);this.errMsg=''},error:(err)=>{console.log(err),this.errMsg=err.message}})

f.reset()
}


}
