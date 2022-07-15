import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appcourse',
  templateUrl: './appcourse.component.html',
  styleUrls: ['./appcourse.component.css']
})
export class AppcourseComponent implements OnInit {
  course={coursetitle:"",
  courseDescription:"",
  courseVenue:"",
  courseDate:"",
  courseDuration:"",
}

  constructor(private api:ApiService) { }
  ngOnInit(): void {
  }
  addCourse(){
    this.api.addCourse(this.course).subscribe(
      (data)=>{
       
      }
    )
    alert("success");
  }


}
