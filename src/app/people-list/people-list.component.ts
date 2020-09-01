import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  peopleList: any = [];
  message: any = '';
  spinner: boolean = false;
  firstname: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private toster: ToastrService) { }

  ngOnInit() {
    this.spinner = true;
    this.userService.getAllUser().subscribe(res => {
      this.peopleList = res as [];
      this.spinner = false;
    }, error => {
      this.toster.success(error.message)
      this.spinner = false;
    })
  }

  delete(person) {
    let index = this.peopleList.indexOf(person)
    this.peopleList.splice(index, 1);
    this.userService.deleteUser(person._id).subscribe(
      res => {
        this.toster.success(res.message)
      },
      error => {
        this.toster.success(error.message)
      }
    )
  }


  userFilter() {
    if(this.firstname == "") {
      this.ngOnInit()
    } else (
      this.peopleList = this.peopleList.filter(res => {
        return res.firstname.toLowerCase().match(this.firstname.toLowerCase());
      })
    )
   
  }




}
