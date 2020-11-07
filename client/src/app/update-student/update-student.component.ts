import { Component, OnInit } from '@angular/core';
import {Student } from '../student';
import{HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { StudentService } from './../student.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
  
})
export class UpdateStudentComponent implements OnInit {

 //private student:Student;

  private stud:Student;

 // isEdit:Boolean=true;
  students: Student[];
 student:Student;

  
  constructor(public studentService:StudentService, private router:Router) { }


  ngOnInit(): void {
    this.student=this.studentService.getter();
    //this.studentService.getStudents()
    //.subscribe((students: Student[])=>this.students=students);
  }
  updateStudent()
  {

    //this.studentService.updateStudent(_id)
   // .subscribe((res)=>{
   //   console.log(res);
    //});
  }

}
