import { Component, OnInit } from '@angular/core';
import { TasklistserviceService } from 'src/app/TaskItService/tasklistservice.service';
import { HttpconnectionService } from 'src/app/shared/http/httpconnection.service';

@Component({
  selector: 'app-kanbanlist',
  templateUrl: './kanbanlist.component.html',
  styleUrls: ['./kanbanlist.component.css'],
})
export class KanbanlistComponent implements OnInit{
  kanbanlist

  /* kanbanlist: {
    name: string,
    date: string,
    status: string,
    priority: string
  }[] = [
    { name: 'clean', date: 'Nov 20', priority: 'High', status: 'To Do' },
    {
      name: 'dinner at Pappo"s',
      date: 'Nov 10',
      priority: 'Low',
      status: 'In progress',
    },
    { name: 'eat', date: 'Nov 24', priority: 'High', status: 'Done' }, { name: 'run', date: 'Nov 25', priority: 'High', status: 'Done' },
  ]; */

  constructor(private taskitservice:TasklistserviceService,private http:HttpconnectionService){}



  ngOnInit(){
   /*  this.kanbanlist=this.taskitservice.getTasks() */
   this.http.fetchTasksFB().subscribe((res:{
    name: string;
    date: string;
    status: string;
    priority: string;
  }[]| [])=>{
    this.kanbanlist=res
    this.taskitservice.saveTasks(res)
  })
    this.taskitservice.listchanged.subscribe((tasks)=>{

      this.kanbanlist=tasks
    })

  }




  checktodostatus(t: { name; date; priority; status }) {
    if (t.status === 'To Do') {
      return true;
    }
  }
  checkipstatus(t: { name; date; priority; status }) {
    if (t.status === 'In progress') {
      return true;
    }
  }
  demo(e,t){
    console.log(e.target.value,t)
    this.taskitservice.editTask(t,e.target.value)
    this.http.updateFB(this.kanbanlist)
  console.log(this.kanbanlist)
  }
OnEdit(id,value){

}

}
