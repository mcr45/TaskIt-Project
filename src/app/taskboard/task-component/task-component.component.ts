import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {


 @Input() task:{name:string,date:string,priority:string,status:string}


}
