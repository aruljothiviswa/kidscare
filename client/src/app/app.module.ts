import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule,Routes } from '@angular/router';
import { StudentService } from './student.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
//import{StudentService}from './student';

  import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FullDetailsComponent } from './full-details/full-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';



//import { BrowserModule } from '@angular/platform-browser'

const appRoutes:Routes=[
  {path:'nav',component:NavComponent},
  {path:'admin',component:AdminComponent},
  {path:'students',component:StudentsComponent},
  {path:'studentView',component:StudentViewComponent},
  {path:'studentDetails',component:StudentDetailsComponent},
  {path:'fullView',component:FullDetailsComponent},
  {path:'updateStudent',component:UpdateStudentComponent},
  {path:'home',component:HomeComponent},
 { path: '',redirectTo: '/home',pathMatch: 'full'},
 {path:'contact',component:ContactComponent},
 {path:'gallery',component:GalleryComponent},
 {path:'about',component:AboutComponent}

]

 @NgModule({
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    StudentsComponent,
    NavComponent,
    AdminComponent,
    StudentViewComponent,
    StudentDetailsComponent,
    FullDetailsComponent,
    UpdateStudentComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [ StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
