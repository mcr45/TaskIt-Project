import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiboredService } from 'src/app/BoredApi/apibored.service';
import { TasklistserviceService } from 'src/app/TaskItService/tasklistservice.service';

@Component({
  selector: 'app-bored',
  templateUrl: './bored.component.html',
  styleUrls: ['./bored.component.css']
})
export class BoredComponent {
apicalled:boolean=false
ntask:string=''
taskform:boolean=false
constructor(private boredservice:ApiboredService,private taskserv:TasklistserviceService){}

newTask(){

  this.boredservice.getTask().subscribe((data)=>{this.ntask=data.activity
    this.apicalled=true
  })
}
openForm(){
  this.taskform=true
}

closeForm(){
  this.taskform=false
}
addTask(e){
  this.taskserv.saveTask({name:e.title,date:e.date,priority:e.priority,status:e.status})
  this.apicalled=false

}

}
