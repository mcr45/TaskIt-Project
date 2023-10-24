import { Component, OnInit } from '@angular/core';
import { TasklistserviceService } from 'src/app/TaskItService/tasklistservice.service';

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

  constructor(private taskitservice:TasklistserviceService){}

  ngOnInit(){
    this.kanbanlist=this.taskitservice.getTasks()
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
  }
OnEdit(id,value){

}

}
