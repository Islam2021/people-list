import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../interfaces/user.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User;
  loaded: boolean = false;
  isLoading: boolean = false

  constructor(private fb: FormBuilder, private userServ: UserService, private router: Router, private toster: ToastrService) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-z .'_]+")
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-z .'_]+")
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    }
    this.registerForm = this.fb.group(formControls)
   }
   get firstname() {return this.registerForm.get('firstname')}
   get lastname() {return this.registerForm.get('lastname')}
   get phone() {return this.registerForm.get('phone')}
   get email() {return this.registerForm.get("email")};
   get password() {return this.registerForm.get("password")};
   get repassword() {return this.registerForm.get('repassword')}

  ngOnInit() {

    setInterval(() => {
      this.loaded = true
    }, 1000)

    let loggedIn = this.userServ.LoggedIn();

    if(loggedIn) {
      this.router.navigate(['/people-list'])
    }
  }

  registerForms(user: any) {
    this.isLoading = true;
    this.userServ.registerAdmin(user.value).subscribe(res => {
      this.toster.success(res.message);
      this.router.navigate(['/']);
    }, error => {
      this.toster.error(error.message);
      this.isLoading = false;
    })
  }

}
