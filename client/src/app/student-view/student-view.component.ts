
import { Component, OnInit } from '@angular/core';
import {Student } from '../student';
import{HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { StudentService } from './../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
  providers:[StudentService]
})
export class StudentViewComponent implements OnInit {
 students: Student[];
  student:Student;
  
  isEdit:boolean;  

  regnumber: number;
  first_name:string;
  last_name:string;
  dob:{$toDate:  "dd-MM-YYYY"};
  gender:string;
  father_name:string;
  father_phno:number;
  mother_name:string;
  mother_phno:number;
  address:string;
  pincode:number;


  constructor(private studentService:StudentService, private router:Router) { }


  ngOnInit(): void {
    this.studentService.getStudents()
    .subscribe((students: Student[])=>this.students=students);

  }

  back()
  {
    this.router.navigate(['/studentDetails'])
  }

  logout()
  {
    this.router.navigate(['']);
  }

  updateStudent(data:Student){
    this.isEdit=true;
    console.log(data);
   
      this.router.navigate(['/updateStudent']);
      
  }
  deleteStudent(_id:any)
   {
     this.studentService.deleteStudent(_id)
     .subscribe((res)=>{
       console.log(res);
     })
 
   }

}
