import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanbanitem',
  templateUrl: './kanbanitem.component.html',
  styleUrls: ['./kanbanitem.component.css']
})
export class KanbanitemComponent {


  @Input() task:{name,date,priority,status}
}
