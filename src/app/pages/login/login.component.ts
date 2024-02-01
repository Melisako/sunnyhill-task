import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginObj: Login;
constructor(private http: HttpClient, private router:Router){
this.loginObj = new Login();
}

onLogin() {
  this.http.post('https://reqres.in/api/login', this.loginObj).subscribe((res: any) => {
    console.log('Response:', res);
    if (res.token) { 
      alert("Login Success");
      localStorage.setItem("token", res.token);
      this.router.navigateByUrl('/homepage');
    } else {
      alert(res.error || "Login failed"); 
    }
  }, error => {
    console.error("HTTP Error:", error);
    alert("Invalid Credentials. Please try again.");
  });
}
}
export class Login{
  email: string;
  password: string;

  constructor(){
    this.email='';
    this.password='';
  }
}
