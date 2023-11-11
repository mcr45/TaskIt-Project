import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasklistserviceService } from 'src/app/TaskItService/tasklistservice.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpconnectionService {
 fireBaseURL='https://taskit-eac4c-default-rtdb.firebaseio.com/tasks.json'

  constructor(private http:HttpClient,private taskserv:TasklistserviceService) { }

  saveTasksToFireBase(){
    const tasks=this.taskserv.getTasks()
    this.http.put(this.fireBaseURL,tasks).subscribe((res)=>{console.log(res)})

  }

  fetchTasksFB(){
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
