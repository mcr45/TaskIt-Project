import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpconnectionService } from 'src/app/shared/http/httpconnection.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

constructor(private fbservice:HttpconnectionService){}


callServer(){
  this.fbservice.saveTasksToFireBase()
}

otracall(){
  this.fbservice.fetchTasksFB()
}

}
