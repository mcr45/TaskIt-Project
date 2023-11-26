import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private route:ActivatedRoute, private router:Router,private http:HttpClient,private auth:AuthService){}
  taskselected:boolean
  kanbanselected:boolean
  boredselected:boolean




  isAuthenticated:boolean
  userEmail:string
  name:string
  subsc:Subscription

  ngOnInit(){
    this.auth.currentUser.subscribe((res)=>{
      if(res){
        this.userEmail=res.email
        this.name=res.email.split('@')[0]
      }
      this.isAuthenticated= !!res
    })
  }


GoToTask (){
  this.taskselected=true
  this.kanbanselected=false
  this.boredselected=false
  this.router.navigate(['/home/tasks'],{relativeTo:this.route})
}
GoToKanban(){
  this.taskselected=false
  this.kanbanselected=true
  this.boredselected=false
  this.router.navigate(['/home/kanban'],{relativeTo:this.route})
}

GoHome(){
  this.taskselected=false
  this.kanbanselected=false
  this.boredselected=false
  this.router.navigate(['/home'],{relativeTo:this.route})
}

GoBored(){
  this.taskselected=false
  this.kanbanselected=false
  this.boredselected=true
  this.router.navigate(['/home/bored'],{relativeTo:this.route})
}

OnSignOut(){
  this.auth.signOut()
}


}
