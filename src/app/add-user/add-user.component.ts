import { User } from './../interfaces/user.service';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder, 
    private userServ: UserService, 
    private router: Router, 
    private toastr: ToastrService
    ) { 

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
        Validators.maxLength(11),
      ]),

    }

    this.addUserForm = this.fb.group(formControls)
  }

  get firstname() {return this.addUserForm.get('firstname')}
  get lastname() {return this.addUserForm.get('lastname')}
  get phone() {return this.addUserForm.get('phone')}

  ngOnInit() {
  }

  addUser(){
    let data = this.addUserForm.value;
    let user = new User(data.firstname, data.lastname, null, data.phone)
    this.isLoading = true;
    this.userServ.addUser(user).subscribe(res => {
      console.log(res);
      this.toastr.success(res.message);
      this.router.navigate(['/people-list'])
    }, error => {      
      this.toastr.error(error.message)
      this.isLoading = false
    })
  }

}
