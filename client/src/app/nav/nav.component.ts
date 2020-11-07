import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  admin()
  {
    this.router.navigate(['/admin']);
  }
  home()
  {
    this.router.navigate(['/home']);
  }
  gallery()
  {
      this.router.navigate(['/gallery']);
  }
  contact()
  {
        this.router.navigate(['/contact']);
  }
  about()
  {
        this.router.navigate(['/about']);
  }
  myFunction()
  {
      this.router.navigate([''])
  }
}
