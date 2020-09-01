import { User } from './../interfaces/user.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  loaded: boolean = false
  isLoading: boolean = false

  constructor(private fb: FormBuilder, private userSrve: UserService, private router: Router, private toster: ToastrService) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
        
      ])
    }
    this.loginForm = this.fb.group(formControls)
   }

   get email() {return this.loginForm.get("email")};
   get password() {return this.loginForm.get("password")};

  ngOnInit(): void {

    setInterval(() => {
      this.loaded = true
    }, 1000)

    let loggedIn = this.userSrve.LoggedIn();
    if(loggedIn) {
      this.router.navigate(['/people-list'])
    }
  }

  loginForms() {
    let data = this.loginForm.value;
    let user = new User(null, null, data.email, null, data.password, null)
    this.isLoading = true;
    this.userSrve.loginForm(user).subscribe(res => {      
        let token = res.token;
        localStorage.setItem("myToken", token)
        this.router.navigate(['/people-list'])
        this.toster.success("Logged in Successfuly!")
    }, error => {
      this.toster.error(error.message)
      this.isLoading = false;
    })
  }
}
