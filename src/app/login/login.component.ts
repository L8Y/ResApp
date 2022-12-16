import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationStatus } from '../AuthenticationStatus.model';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  login=new Login();
 
  msg: string | undefined;
  
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
    
  }

  loginAdmin(){
    this.service.loginAdminFromRemote(this.login).subscribe(
      data =>{console.log("response recieved");
      alert('loginsuccess');
     this.router.navigate(['/home'])
    } ,
      error => {
        console.log("exception occured");
      this.msg="please enter valid emailid and password";
      }
      )
  }


}
