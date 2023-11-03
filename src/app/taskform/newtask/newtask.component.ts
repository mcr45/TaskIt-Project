import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent {

@Input() taskformobject:{name,date,priority,status}
//PROBLEMA:ngmodel non mi cambia taskobject.name

mindate=new Date().getFullYear().toString()+'-'+new Date().getMonth().toString()+'-'+new Date().getDay().toString()

title:string
date
priority
description
status

@Output() newtask:EventEmitter<{title,date,priority,description,status}>=new EventEmitter<{title,date,priority,description,status}>()
/* taskdone:boolean */

@Output() taskdone:EventEmitter<boolean>=new EventEmitter<boolean>()




OnCloseTask(){
  this.taskdone.emit(true)
}

addTask(){
  console.log(this.title + ''+ this.date+''+this.priority+''+this.description+''+this.status)
  /* this.newtask.emit({title:this.title,date:,priority:this.priority,description:this.description,status:this.status}) */
  this.newtask.emit({title:this.title,date:new Date(this.date).toLocaleDateString('en-us', {   day:"numeric", month:"short"}),priority:this.priority,description:this.description,status:this.status})

}

OnFormSubmit(f:NgForm){

  /* console.log(f.value.status) */
  this.newtask.emit({title:f.value.title,date:new Date(f.value.date).toLocaleDateString('en-us', {   day:"numeric", month:"short"}),priority:f.value.priority,description:f.value.description,status:f.value.status})


}


}
