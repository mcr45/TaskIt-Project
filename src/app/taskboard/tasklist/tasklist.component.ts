import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

tasksList=[{name:'clean',date:'20 Nov',priority:'High',status:"To Do"},{name:'cry intypescript',date:'10 Nov',priority:'Low',status:"To Do"},{name:'eat',date:'24 Nov',priority:'High',status:"To Do"}]



}
