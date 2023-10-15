import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {


 @Input() task:{name:string,date:string,priority:string,status:string}
  @Input() taskindex:number

  @Output() taskdeleted:EventEmitter<number>=new EventEmitter<number>()
  @Output() taskedit:EventEmitter<number>=new EventEmitter<number>()

  EditTask(){
    this.taskedit.emit(this.taskindex)
  }

  DeleteTask(){

    this.taskdeleted.emit(this.taskindex)

  }


}
