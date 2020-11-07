import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
student()
{
  this.router.navigate(['/students']);
}

studentView()
{
  this.router.navigate(['/studentView']);
}

back(){
  this.router.navigate(['/admin']);
}

logout(){
  this.router.navigate(['']);
}
}
