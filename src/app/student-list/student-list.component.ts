import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudCrudService } from '../service/stud-crud.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studcrud:StudCrudService , private route:Router) { }

  ngOnInit(): void {
    this.getstudents();
  }

  studentlist:any
  getstudents()
  {
    this.studcrud.getallstudent().subscribe((data)=>{this.studentlist=data})
  }

  delstud(id:any)
  {
    if(window.confirm('Are you sure want to delete?'))
     {this.studcrud.deletesinglestudent(id).subscribe((data)=>{console.log(data);alert("Data Deleted");}
     )}
     this.getstudents();
  }

  updtstud(id:any)
  {
     this.route.navigate(['/edit-stud',id])
  }

  deleteallstudents()
{
  if(window.confirm('Are you sure want to delete?')){
    this.studcrud.deleteall().subscribe((data)=>{console.log(data);
    alert(" All Records Deleted");}
   )}
   this.getstudents();
}
search_name:any
  searchstud()
  {
    console.log(this.search_name)
    this.studcrud.searchbyname(this.search_name).subscribe((data)=>{
      this.studentlist=data
    })
  }
search_id:any
searchstudid()
  {
    console.log(this.search_name)
    this.studcrud.getsinglestudent(this.search_id).subscribe((data)=>{
      this.studentlist=data
    })
  }

  reset_search(){
    this.search_name='';
    this.search_id='';
    this.getstudents();
  }

} 

