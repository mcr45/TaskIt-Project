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
import { BoredComponent } from './bored/bored/bored.component';
import { RouterModule,Routes } from '@angular/router';
import { LandingpageComponent } from './authentication/landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes=[/* {path:'',redirectTo:'/home', pathMatch:'full'} */,
/* {path:'',component:AppComponent} */,
{path:'',component:LandingpageComponent,pathMatch:'full'},
{path:'home',component:HomeComponent,children:[{path:'tasks',component:TasklistComponent},
{path:'kanban',component:KanbanlistComponent},
{path:'bored',component:BoredComponent}]},


];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
