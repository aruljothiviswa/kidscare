
import { StudentsComponent } from './students/students.component';
import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{map} from 'rxjs/operators';
import { Student } from './student';

//import 'rxjs/add/operator/map';
import{Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private student:Student;

  selectedStudent:Student;
  students:Student[];
  private headers=new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http:HttpClient) { }

  getStudents()
  {
    return this.http.get('http://localhost:3000/api/students',{headers:this.headers});
    //('http://localhost:3000/api/students')
    //.pipe(map(res=>res));
  }
addStudent(student:Student)
 // addStudent(newStudent):Observable<Student>
  {

    return this.http.post('http://localhost:3000/api/student',student,{headers:this.headers});
   // var headers=new Headers();
   // headers.append('content_type','application/json');
   ////return this.http.post<Student>('http://localhost:3000/api/student',newStudent,)
   //.pipe(map(res=>res));
   

  }

  getOne(_id:any):Observable<Student>
  {
    return this.http.get<Student>('http://localhost:3000/api/students/'+`${_id}`)
    .pipe(map(res=>res));
  }
  

  updateStudent(student:Student)
  {
    //this.student._id=;
    return this.http.put('http://localhost:3000/api/student/'+`${this.student._id}`,student,{headers:this.headers});
  //return this.http.put<Student>('http://localhost:3000/student/'+`${student._id}`,student,{headers:this.headers})
   //.pipe(map(res=>res));
    
  }
     
 
  deleteStudent(id:string)
  {
    return this.http.delete('http://localhost:3000/api/student/'+id,{headers:this.headers});
    //return this.http.delete<Student>('http://localhost:3000/api/student/'+`${_id}`)
   //.pipe(map(res=>res));
  }
setter(student:Student){
  this.student=student;
}
getter(){
  return this.student;
}

}
