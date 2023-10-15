import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent {

@Input()  tasktoedit
title
date
priority
status
description
id

@Output() editedTask:EventEmitter<{id,title,date,description,priority,status}>=new EventEmitter<{id,title,date,description,priority,status}>
@Output() doneedit:EventEmitter<boolean>=new EventEmitter<boolean>


ngOnInit(){
  console.log(this.tasktoedit)
  this.title=this.tasktoedit.title
  this.date=this.tasktoedit.date
  this.priority=this.tasktoedit.priority
  this.status=this.tasktoedit.status
  this.description=''
  this.id=this.tasktoedit.id
}

OnEditTask(){

  this.editedTask.emit({id:this.id,title:this.title,date:new Date(this.date).toLocaleDateString('en-us', {   day:"numeric", month:"short"}),priority:this.priority,status:this.status,description:this.description})

}

OnCloseEditTask(){
this.doneedit.emit(true)

}


}
