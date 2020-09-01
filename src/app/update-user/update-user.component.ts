import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../interfaces/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateUserForm: FormGroup;
  isLoading: boolean = false
  constructor(
    private fb: FormBuilder, 
    private activateRouter: ActivatedRoute, 
    private userServ: UserService, 
    private toastr: ToastrService,
    private router: Router) { 

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

    this.updateUserForm = this.fb.group(formControls);
    
  }

  get firstname() {return this.updateUserForm.get('firstname')}
  get lastname() {return this.updateUserForm.get('lastname')}
  get phone() {return this.updateUserForm.get('phone')}

  ngOnInit(): void {

    let userID = this.activateRouter.snapshot.params.id;

    this.userServ.getOneUser(userID).subscribe(res => {
      let user = res;
      this.updateUserForm.patchValue({
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
      })
      
    }, error => {
      this.toastr.error(error.message)
    })
    
  }

  updateUser() {
    let data = this.updateUserForm.value;
    let userID = this.activateRouter.snapshot.params.id;
    this.isLoading = true;
    let user = new User(data.firstname, data.lastname, null, data.phone, null, userID);
    this.userServ.updateUser(user).subscribe(res => {
      this.toastr.success(res.message)
      this.router.navigate(['/people-list'])
    }, error => { 
      this.toastr.error(error.message)
      this.isLoading = false
    })
  }

}
