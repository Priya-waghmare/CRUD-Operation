import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { StudCrudService } from '../service/stud-crud.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studcrud:StudCrudService, private route:Router, private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe((data)=>{this.stud_id=data['id']})

    this.studcrud.getsinglestudent(this.stud_id).subscribe(
      (data)=>{this.stud_data=data;console.log(this.stud_data);

    this.editstudform.reset(this.stud_data[0])}
    )
  }


stud_id:any
stud_data:any

editstudform=new FormGroup({
  id:new FormControl(''),
  name:new FormControl(''),
  marks:new FormControl(''),
})
onupdate()
    {
      this.studcrud.updatestudent(this.editstudform.value, this.stud_id).subscribe(
        (data)=>{
          console.log(data);
          console.log("Data Updated Successfully");
        })
        alert("Details Updated Successfully!!");
        this.route.navigate(['/stud-list']);
        this.editstudform.reset();
    } 
  
   


}
