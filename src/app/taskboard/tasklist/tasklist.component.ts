import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

tasksList=[{name:'clean',date:'Nov 20',priority:'High',status:"To Do"},{name:'dinner at Pappo"s',date:'Nov 10',priority:'Low',status:"To Do"},{name:'eat',date:'Nov 24',priority:'High',status:"To Do"}]
ngOnInit(){console.log(this.tasksList)}
/* oldtasknumber:number=0
@Input() tasknumber:number=0
@Input()  tasktoadd
novaTask(){
if(this.oldtasknumber !=this.tasknumber){
this.tasksList.push({name:this.tasktoadd.title,date:this.tasktoadd.date,priority:this.tasktoadd.priority,status:this.tasktoadd.status})
this.oldtasknumber=this.tasknumber
console.log('SONOQUIIIIIIIIIIIIIIIIIIIIIIIIIIIII'+this.tasksList)
this.tasknumber++
}

} */



 showF:boolean





OnTaskCreated(e){


  this.tasksList.push({name:e.title,date:e.date,priority:e.priority,status:e.status})
  this.showF=!this.showF

}

OnTaskDone(e){
  if(e){
    this.showF=!this.showF
  }
}


showForm(){
this.showF=true

}



}
