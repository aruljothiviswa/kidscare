import { Router } from '@angular/router';
import { StudentService } from './../student.service';
import { Component, OnInit} from '@angular/core';
import {Student } from '../student';
import{HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrls: ['./full-details.component.css'],
  providers:[StudentService]
})
export class FullDetailsComponent implements OnInit {


  students: Student[];
  student:Student;

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
  backStudent(){
    this.router.navigate(['/studentView'])
  }

}
