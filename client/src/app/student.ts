export class Student{
    _id?:string;
    regnumber:number;
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
}