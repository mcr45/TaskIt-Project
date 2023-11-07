import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private route:ActivatedRoute, private router:Router){}



GoToTask (){
  this.router.navigate(['/home/tasks'],{relativeTo:this.route})
}
GoToKanban(){
  this.router.navigate(['/home/kanban'],{relativeTo:this.route})
}

GoHome(){
  this.router.navigate(['/home'],{relativeTo:this.route})
}

GoBored(){
  this.router.navigate(['/home/bored'],{relativeTo:this.route})
}


}
