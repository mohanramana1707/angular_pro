import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private route:Router){}
  
  email:string='';
  password:string='';

  login(){
    if(this.email=='admin' && this.password=='admin'){
      console.log("email : "+this.email);
      console.log(this.password);

      alert("Login SuccessFull");
      this.route.navigate(['/rooms','add']);

    }
    else{
      alert("Wrong Credentials");
    }
  }

}
