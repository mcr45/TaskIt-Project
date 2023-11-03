import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TasklistComponent } from './taskboard/tasklist/tasklist.component';
import { TaskComponentComponent } from './taskboard/task-component/task-component.component';
import { NewtaskComponent } from './taskform/newtask/newtask.component';
import { TaskeditComponent } from './taskform/taskedit/taskedit.component';
import { KanbanlistComponent } from './kanban/kanbanlist/kanbanlist.component';
import { KanbanitemComponent } from './kanban/kanbanitem/kanbanitem.component';
import { AppRoutingModule } from './app-routing.module';
import { FormvalidatorDirective } from './TaskItDirectives/formvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasklistComponent,
    TaskComponentComponent,
    NewtaskComponent,
    TaskeditComponent,
    KanbanlistComponent,
    KanbanitemComponent,
    FormvalidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
