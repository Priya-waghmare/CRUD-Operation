import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudCrudService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  //Get All Student's Data
  getallstudent()
  {
    return this.http.get('http://localhost:3500/students')
  }

  // Add New Student
  addstudent(data:any)
  {
    return this.http.post('http://localhost:3500/addstud',data)
  }

  // Update Student Details
  updatestudent(data:any,id:any)
  {
    return this.http.put(`http://localhost:3500/updtstud/${id}`,data)
  }

  // Delete Single Student
  deletesinglestudent(id:any)
  {
    return this.http.delete(`http://localhost:3500/del-stud/${id}`)
  }

  // Get Single Data
  getsinglestudent(id:any)
  {
    return this.http.get(`http://localhost:3500/searchstudid/${id}`)
  }

  // Delte All
  deleteall()
  {
    return this.http.delete('http://localhost:3500/delall')
  }

  // Search by Name
  searchbyname(name:any)
  {
    return this.http.get(`http://localhost:3500/searchstu/${name}`)
  }


}
