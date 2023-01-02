import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { StudCrudService } from '../service/stud-crud.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor( private studcrud:StudCrudService,private route:Router) { }

  ngOnInit(): void {
  }
  studform=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    marks:new FormControl(''),
})

addstud()
    {
      console.log(this.studform.value);
      this.studcrud.addstudent(this.studform.value).subscribe(
        (data)=>{console.log(data)}
      )
      alert("Student Added Successfully!!");
      this.route.navigate(['/stud-list']);
      this.studform.reset();
    }


}
