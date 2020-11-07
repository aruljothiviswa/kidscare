import { Router,RouterEvent } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(event: { preventDefault: () => void; target: any; })
  {
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#password').value

   
      if(username=="admin" && password=="admin"){
        this.router.navigate(['/studentDetails'])
       
      }else{
        window.alert("Username or Password incorrect!...")
      }
      

      }





  //submit(){
   
    
  //  this.router.navigate(['/studentDetails']);
  
 // }

  nav()
  {
    this.router.navigate(['']);
  }

}
