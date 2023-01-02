import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'',redirectTo:'book-list',pathMatch:'full'},
  {path:'stud-list' ,component:StudentListComponent},
  {path:'add-stud' ,component:AddStudentComponent},
  {path:'edit-stud/:id' ,component:EditStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
