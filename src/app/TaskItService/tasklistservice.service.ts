import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpconnectionService } from '../shared/http/httpconnection.service';

@Injectable({
  providedIn: 'root',
})
export class TasklistserviceService {
  constructor(/* private http:HttpconnectionService */) {}

  kanbanlist: {
    name: string;
    date: string;
    status: string;
    priority: string;
  }[] /* [
    { name: 'clean', date: 'Nov 20', priority: 'High', status: 'To Do' },
    {
      name: 'dinner at Pappo"s',
      date: 'Nov 10',
      priority: 'Low',
      status: 'In progress',
    },
    { name: 'eat', date: 'Nov 24', priority: 'High', status: 'Done' },
    { name: 'run', date: 'Nov 25', priority: 'High', status: 'Done' },
  ]; */
  ngOnInit(){

  }
  @Output() listchanged = new EventEmitter<
    { name: string; date: string; status: string; priority: string }[]
  >();
  @Output() taskselected = new EventEmitter<{
    name: string;
    date: string;
    status: string;
    priority: string;
  }>();

  getTasks() {
    return this.kanbanlist.slice();
  }
  saveTasks(tasks:{
    name: string;
    date: string;
    status: string;
    priority: string;
  }[]){
    this.kanbanlist=tasks/*
    this.http.saveTasksToFireBase() */
    this.listchanged.emit(this.kanbanlist.slice());
    console.log(this.kanbanlist)
  }
  updateFB(tasks:{
    name: string;
    date: string;
    status: string;
    priority: string;
  }[]){
    this.kanbanlist=tasks
  }



  saveTask(t: {
    name: string;
    date: string;
    status: string;
    priority: string;
  }) {
    this.kanbanlist.push(t);
    this.listchanged.emit(this.kanbanlist.slice());
  }

  removeTask(id: number) {
    this.kanbanlist.splice(id, 1);
    this.listchanged.emit(this.kanbanlist.slice());
  }
  editTask(
    t: { name: string; date: string; status: string; priority: string },
    val: string
  ) {
    this.kanbanlist[this.kanbanlist.indexOf(t)].status = val;
    this.listchanged.emit(this.kanbanlist);
  }

  tasklistEdit(id,t:{name,date,priority,status}){

      this.kanbanlist[id]=t
      this.listchanged.emit(this.kanbanlist)
  }

  tasklistDelete(id){
    this.kanbanlist.splice(id,1)
    this.listchanged.emit(this.kanbanlist)
  }

}
