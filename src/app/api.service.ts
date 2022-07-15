import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewcourse=()=>{
    return this.http.get<any>("https://mylinkurcodes.app.herokuapp.com/getcourses")
  }
  addCourse=(course:any)=>{
    return this.http.get<any>("https://mylinkurcodes.app.herokuapp.com/getcourse",course)
  }

  }

