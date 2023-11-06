import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiboredService {
 private apiUrl='http://www.boredapi.com/api/activity/'
constructor(private http:HttpClient) { }


getTask():Observable<any>{

  return this.http.get(this.apiUrl)
}



}
