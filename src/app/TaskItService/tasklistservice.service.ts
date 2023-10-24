import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasklistserviceService {

  constructor() { }

  kanbanlist: {
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
  ];

  @Output() listchanged= new EventEmitter<{name: string, date: string,status: string,priority: string}[]>()
  @Output() taskselected= new EventEmitter<{name: string,
    date: string,
    status: string,
    priority: string}>()

  getTasks(){

return this.kanbanlist.slice()

  }

  saveTask(t:{name: string,
    date: string,
    status: string,
    priority: string}){

this.kanbanlist.push(t)
this.listchanged.emit(this.kanbanlist.slice())
    }

removeTask(id:number){
  this.kanbanlist.splice(id,1)
  this.listchanged.emit(this.kanbanlist.slice())

}
editTask(id:number){


}



}
