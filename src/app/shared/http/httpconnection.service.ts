import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasklistserviceService } from 'src/app/TaskItService/tasklistservice.service';
import { exhaustMap, take } from 'rxjs';
import { pipe } from 'rxjs';
import { tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})




export class HttpconnectionService {
  fireBaseURL = 'https://taskit-eac4c-default-rtdb.firebaseio.com/tasks.json';

  constructor(
    private http: HttpClient,
    private taskserv: TasklistserviceService,
    private auth: AuthService
  ) {}

  saveTasksToFireBase() {
    const tasks = this.taskserv.getTasks();
    this.http.put(this.fireBaseURL, tasks).subscribe((res) => {
      console.log(res);
    });
  }

  fetchTasksFB() {
    /* return this.http.get(this.fireBaseURL).subscribe((res:{
      name: string;
      date: string;
      status: string;
      priority: string;
    }[]| [])=>{
      this.taskserv.saveTasks(res)
    })
 */
    /* return this.auth.currentUser.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http
          .get(this.fireBaseURL, {
            params: new HttpParams().set('auth', user.token),
          })
          .pipe(tap((tasks:{
            name: string;
            date: string;
            status: string;
            priority: string;
          }[])=>{  this.taskserv.saveTasks(tasks)}))})
    );
  } using interceptor now*/

  return this.http.get(this.fireBaseURL).subscribe((res:{
    name: string;
    date: string;
    status: string;
    priority: string;
  }[]| [])=>{
    this.taskserv.saveTasks(res)
  })




}

}
