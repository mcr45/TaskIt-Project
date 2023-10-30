import { Component, Input } from '@angular/core';
import { TasklistserviceService } from 'src/app/TaskItService/tasklistservice.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

 constructor(private taskserv:TasklistserviceService){}
 tasksList
/*
tasksList=[{name:'clean',date:'Nov 20',priority:'High',status:"To Do"},{name:'dinner at Pappo"s',date:'Nov 10',priority:'Low',status:"To Do"},{name:'eat',date:'Nov 24',priority:'High',status:"To Do"}]
ngOnInit(){console.log(this.tasksList)} */

ngOnInit(){
  this.tasksList=this.taskserv.getTasks()
  this.taskserv.listchanged.subscribe((tasks)=>{this.tasksList=tasks})
}


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

 showFE:boolean//added

 taskobject:{name,date,priority,status}

 taskeditobject:{title,date,priority,status,id}//added

OnTaskDeleted(e){
this.tasksList.splice(e,1)

}



OnTaskCreated(e){

/*
  this.tasksList.push({name:e.title,date:e.date,priority:e.priority,status:e.status}) */
  this.taskserv.saveTask({name:e.title,date:e.date,priority:e.priority,status:e.status})
  this.showF=!this.showF

}

OnTaskEdit(e){/*
this.taskobject={name:this.tasksList[e].name,date:this.tasksList[e].date,priority:this.tasksList[e].priority,status:this.tasksList[e].status}
this.showF=!this.showF */
this.showFE=true
this.taskeditobject={title:this.tasksList[e].name,date:this.tasksList[e].date,priority:this.tasksList[e].priority,status:this.tasksList[e].status,id:e}


}

OnTaskDone(e){
  if(e){
    this.showF=!this.showF
  }
}
OnTaskEdited(e){
if(e){/*
  console.log(e)
this.tasksList[e.id]={name:e.title,date:e.date,priority:e.priority,status:e.status} */
/* console.log(this.tasksList.indexOf(e.title)) */
this.taskserv.tasklistEdit(e.id,{name:e.title,date:e.date,priority:e.priority,status:e.status})
this.showFE=false
}


}

showForm(){
this.showF=true

}
showEditForm(){
  this.showFE=true
}


OnCloseEditTask(e){
if(e){
  this.showFE=false
}

}

}
