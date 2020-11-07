import { StudentService } from './../student.service';
import { Component, OnInit} from '@angular/core';
import {Student } from '../student';
import{HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import{Router} from '@angular/router';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[StudentService]
})
export class StudentsComponent implements OnInit {

  private stud:Student[];
  constructor(private studentService:StudentService, private router:Router) { }
  students:Student[];

  student:Student;
  isEdit:boolean=false;
  

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

 
  studentList:Student[]=[];

  addStudent(form:NgForm)
  {
      const newStudent={
      regnumber:this.regnumber,
      first_name:this.first_name,
      last_name:this.last_name,
      dob:this.dob,
      gender:this.gender,
      father_name:this.father_name,
      father_phno:this.father_phno,
      mother_name:this.mother_name,
      mother_phno:this.mother_phno,
      address:this.address,
      pincode:this.pincode
    };
    if(!this.isEdit)
    
    {
    this.studentService.addStudent(newStudent)
    .subscribe((res:any)=>{
      console.log(res);
      form.resetForm();
      this.getStudents();
    });
  }
  else
  {
    const newStudent={
      regnumber:this.regnumber,
      first_name:this.first_name,
      last_name:this.last_name,
      dob:this.dob,
      gender:this.gender,
      father_name:this.father_name,
      father_phno:this.father_phno,
      mother_name:this.mother_name,
      mother_phno:this.mother_phno,
      address:this.address,
      pincode:this.pincode
    };
    this.studentService.updateStudent(newStudent)
    .subscribe((res:any)=>{
      console.log(res);
      form.resetForm();
      this.getStudents();
      this.isEdit=false;
    });
  }
  }

  deleteStudent(_id:any)
  {
    this.studentService.deleteStudent(_id)
    .subscribe((res)=>{
      console.log(res);
      this.getStudents();
      this.isEdit=true;
    })
  }

  updStudent(student){
    this.isEdit=true;
  this.studentService.setter(student);
  console.log(student);
  this.regnumber=student.regnumber;
  this.first_name=student.first_name;
  this.last_name=student.last_name;
  this.dob= student.dob;
  this.gender=student.gender;
  this.father_name=student.father_name;
  this.father_phno=student.father_phno;
  this.mother_name=student.mother_name;
  this.mother_phno=student.mother_phno;
  this.address=student.address;
  this.pincode=student.pincode;
  }
  
  getStudents()
  {
     this.studentService.getStudents()
    .subscribe((students: Student[])=>this.students=students);  
  }

  back()
  {
    this.router.navigate(['/studentDetails']);
  }

  logout(){
    this.router.navigate(['']);
  }

  ngOnInit():void 
  {
    this.getStudents();
  }

}
