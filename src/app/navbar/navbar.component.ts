import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(
    private router: Router, 
    private userServ: UserService, 
    private toster: ToastrService) 
    { }

  ngOnInit(): void {

    this.isLoggedIn = this.userServ.LoggedIn()
  }

  logOut() {
    localStorage.removeItem("myToken");
    this.router.navigate(['']);
    this.toster.success("Logged out Successfuly!")
  }


}
