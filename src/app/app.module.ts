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
import { BoredComponent } from './bored/bored/bored.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './authentication/landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';
import { SignuppageComponent } from './authentication/signuppage/signuppage.component';
import { TasklistserviceService } from './TaskItService/tasklistservice.service';
import { SigninpageComponent } from './authentication/signinpage/signinpage.component';
import { AuthService } from './shared/auth.service';
import { AuthInterceptorService } from './shared/auth-interceptor.service';
import { HttpconnectionService } from './shared/http/httpconnection.service';


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
    FormvalidatorDirective,
    BoredComponent,
    LandingpageComponent,
    HomeComponent,
    SignuppageComponent,
    SigninpageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TasklistserviceService,HttpconnectionService,AuthService,  {provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
